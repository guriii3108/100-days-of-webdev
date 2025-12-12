# Day 79 – Middleware + JWT Verification (WIP)

## Overview
Implemented an auth middleware with `jwt.verify()` to decode tokens, attach the payload to `req`, and render it on the profile page. Validation and richer error handling are queued for tomorrow.

## What I Learned
- Creating a middleware to verify JWT tokens
- Using `jwt.verify()` to decode and validate tokens
- Attaching decoded user data to the `req` object
- Making user data available to protected routes

## Key Concepts
- Middleware functions run before the main route handler
- `jwt.verify()` checks token validity and extracts the payload
- Data added to `req` is available to downstream handlers
- Authentication middleware secures protected routes

## Auth Middleware (JWT Verification)
```js
const authenticate = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("Access denied");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to req
    next();
  } catch (error) {
    res.status(401).send("Invalid token");
  }
};
```

## Profile Route (Using Middleware)
```js
app.get("/profile", authenticate, (req, res) => {
  res.render("profile", { user: req.user });
});
```

## What I Built
- A working authentication middleware
- JWT verification logic
- User data extraction and passing to the profile page

## What’s Next
- Error handling for edge cases (e.g., expired tokens)
- Validation using Joi or Zod
- Improving middleware to handle varied auth scenarios

## Tomorrow’s Plan (Day 80)
- Implement validation for request bodies
- Handle different error cases in middleware
- Improve security with best practices
- Finalize authentication flow with remaining tasks