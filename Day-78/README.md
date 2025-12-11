Day 78 – Login + Logout Flow (bcrypt.compare + JWT)

## Overview
Secure auth flow with password verification via `bcrypt.compare`, JWT issuance for sessions, cookie-based storage, and logout that clears the token. Routes are protected with middleware that validates JWTs.

## Stack
- Node.js + Express
- MongoDB (User lookup)
- bcrypt for password hashing/verification
- jsonwebtoken for token issuance/verification
- Cookies for token storage (`httpOnly`)

## Endpoints
- `POST /login` – validate credentials, issue JWT, set cookie
- `GET /logout` – clear auth cookie, redirect to login
- `GET /dashboard` – protected; requires valid JWT

## Auth Flow
```js
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send("Invalid credentials");
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
  res.redirect("/dashboard");
});
```

```js
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});
```

```js
const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("Access denied");

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send("Invalid token");
    req.user = decoded;
    next();
  });
};
```

```js
app.get("/dashboard", authenticate, (req, res) => {
  res.render("dashboard", { user: req.user });
});
```

## Highlights
- Secure password verification with `bcrypt.compare`
- JWT creation with 1h expiry and `httpOnly` cookie storage
- Middleware gating for protected routes
- Simple logout by clearing the JWT cookie

## Risks / Considerations
- Handle expired/invalid JWTs consistently (401 + redirect)
- Choose storage: cookies (recommended for httpOnly) vs localStorage
- Keep `JWT_SECRET` out of source control
- Distinguish authentication (who you are) vs authorization (what you can do)

## Next Steps (Day 79)
- Add centralized error-handling middleware
- Validate request bodies (Joi/Zod)
- Harden input with sanitization and stricter validation