# Day 80 – Error Handling + Validation (Joi) + Clean Middleware

## Overview

Today's focus: improved backend structure using proper error handling, created a global error middleware, and added validation for request bodies using Joi. Cleaned up the authentication middleware as well.

## What I Learned Today

- How to create a global error-handling middleware
- Using try/catch with `next(error)` to propagate errors
- Validating input data with Joi schemas
- Sending clean and consistent error responses
- Improving readability and safety of routes
- Separating validation and auth logic into reusable middlewares

## Key Concepts

- **Error middleware** has 4 parameters: `(err, req, res, next)`
- **Validation** should happen before database actions
- **Joi** helps enforce clean and predictable data structures
- **Middleware ordering** matters: validation → auth → route handler

## Code Examples

### Joi Validation Schema (Signup)

```javascript
const Joi = require("joi");

const signupSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
```

### Validation Middleware

```javascript
const validateSignup = (req, res, next) => {
  const { error } = signupSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};
```

### Improved Auth Middleware

```javascript
const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("No token, unauthorized");

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch {
    res.status(401).send("Invalid or expired token");
  }
};
```

### Global Error-Handling Middleware

```javascript
app.use((err, req, res, next) => {
  console.log("Error:", err.message);
  res.status(err.status || 500).send(err.message || "Something went wrong");
});
```

### Using Validation + Auth in Routes

```javascript
app.post("/signup", validateSignup, async (req, res, next) => {
  try {
    // signup logic here…
    res.send("Signup OK");
  } catch (err) {
    next(err);
  }
});
```

## What I Built Today

- A consistent backend error-handling system
- Joi validation for cleaner and safer API requests
- Improved auth middleware with better error handling
- Organized and professional backend structure

## Challenges

- Understanding Joi schema options and validation rules
- Remembering to pass errors using `next(err)` instead of throwing
- Ordering middlewares correctly in route definitions
- Handling expired JWT errors gracefully

## Tomorrow's Plan (Day 81)

- Start building Notes App backend with authentication
- Create notes model + routes
- Only allow logged-in users to create/read/update/delete notes
- Use `populate` to show user → notes relationship