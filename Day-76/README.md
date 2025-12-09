# Day 76 — Database Relationships (Embedding vs Referencing)

## Overview
Modeled MongoDB relationships with Mongoose, comparing when to embed vs reference and practicing `populate()` for stitched reads.

## Cheat Sheet
- **Embed (denormalize):** small, tightly coupled, read-heavy data (e.g., comments on a post).
- **Reference (normalize):** reused or frequently updated data; many-to-many (e.g., authors, tags).
- **`populate()`:** extra query to hydrate referenced docs—convenient, but avoid on hot paths.

## Embedding Example (post with comments)
```js
const commentSchema = new mongoose.Schema({
  text: String,
  author: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [commentSchema], // embedded comments
});

const Post = mongoose.model("Post", postSchema);
```

## Referencing Example (post with author)
```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.model("User", userSchema);

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Post = mongoose.model("Post", postSchema);
```

## Hydrating References with `populate()`
```js
const post = await Post.findOne().populate("author");
console.log(post.author.name); // hydrated author doc
```

## What I Practiced
- Built blog-style models: Posts, Users, Comments.
- Embedded comments inside posts; referenced users as authors.
- Used `populate()` to pull author details alongside posts.

## Trade-offs Noted
- Embedding: faster reads, atomic updates, but risks 16MB doc limit and duplication when reused elsewhere.
- Referencing: avoids duplication and supports many-to-many, but adds joins/queries and can slow hot read paths.

## Next (Day 77)
- Start authentication flow.
- Learn password hashing with bcrypt.
- Implement user signup and persist new users.