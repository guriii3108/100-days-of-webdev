# Day 77 – Authentication Basics (Hashing + Signup Flow)

## Overview
- Implemented a signup flow that hashes credentials with `bcrypt` before storing in MongoDB.

## Key Learnings
- Passwords must never be stored in plain text; hashing is one-way by design.
- `bcrypt` salts by default, increasing resistance to rainbow-table attacks.
- A secure signup path combines validation, hashing, and safe persistence.

## Implementation Notes
### User schema with hashed password
```js
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 }
});
```

### Signup route (hash → save)
```js
const bcrypt = require("bcrypt");

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, email, password: hashedPassword });
  res.send("Signup successful!");
});
```

## Deliverables
- EJS signup form wired to a POST handler.
- Mongoose user model with validation and uniqueness on username/email.
- Password hashing pipeline using `bcrypt` with a cost factor of 10.

## Challenges Encountered
- Ensuring `bcrypt` was installed/imported before route execution.
- Handling duplicate usernames/emails gracefully without leaking details.
- Keeping async/await handling correct around hashing and DB writes.

## Next Steps (Day 78)
- Add login flow using `bcrypt.compare` for credential verification.
- Evaluate session-based auth versus JWT for maintaining user state.
- Begin enforcing route protection for authenticated users.