## QuickPost (Day 81-82)

A minimalist Express + MongoDB social feed where users can sign up, log in, publish posts, like/unlike, and edit their own content. Views are rendered with EJS and sessions are handled via JWT cookies.

### Tech Stack
- Node.js, Express 5
- MongoDB with Mongoose
- EJS templating
- JWT for auth, cookies via `cookie-parser`
- Password hashing with `bcrypt`

### Features
- User registration with hashed passwords
- JWT cookie-based login/logout middleware guarding protected routes
- Profile page with a user’s posts (populated via Mongoose relations)
- Global feed showing all posts, newest first, with like/unlike per user
- Create and edit posts (with redirect back to profile or feed)

### Project Structure
- `index.js` — Express app, routes, auth middleware, likes/edit flows
- `models/userModel.js` — User schema, posts relation, MongoDB connection
- `models/postModel.js` — Post schema with likes array and timestamps
- `views/` — EJS pages (`index`, `login`, `profile`, `feed`, `edit`)

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB running locally on `mongodb://localhost:27017/APP`

### Setup & Run
```bash
npm install
npm start  # if added, otherwise: node index.js
```
- Server listens on `http://localhost:3000`.
- Ensure `mongod` is running before starting the server.

### Core Routes
- `GET /` — Landing page
- `GET /login` — Login form
- `POST /register` — Create account (hashes password, sets JWT cookie)
- `POST /login` — Authenticate and set JWT cookie
- `GET /logout` — Clear JWT cookie
- `GET /profile` — Protected; shows current user + their posts
- `GET /feed` — Protected; global feed, newest first
- `POST /post` — Protected; create new post
- `GET /like/:id` — Protected; toggle like/unlike (supports redirect back)
- `GET /edit/:id` — Protected; edit form for a post
- `POST /update/:id` — Protected; update post content

### Notes & Improvements
- Add input validation and better error handling responses
- Move secret keys and DB URI to environment variables
- Add CSRF protection and rate limiting for auth routes
- Add pagination/infinite scroll on feed and profile
- Write tests and add a `npm start` script
