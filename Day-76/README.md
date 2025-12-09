Day 76 – Database Relationships (Referencing vs Embedding)

Overview
Focused on modeling relationships in MongoDB with Mongoose, comparing embedding vs referencing and practicing populate() to join related data.

Key Takeaways
- Two relationship patterns: embedding (denormalized) and referencing (normalized).
- Embedding nests related docs for fast reads; referencing stores ids to reduce duplication.
- populate() performs the extra query to hydrate referenced docs.

When to Embed (Denormalize)
- Best for: small, tightly coupled data (e.g., comments on a post), mostly-read workloads.
- Pros: single-query reads, atomic updates.
- Cons: 16MB document cap, duplicated data when the embedded piece is reused elsewhere.

When to Reference (Normalize)
- Best for: reusable data (e.g., authors), many-to-many relations, write-heavy or frequently updated shared entities.
- Pros: avoids duplication, flexible schemas.
- Cons: extra queries/joins via populate(), potential perf hit on read-heavy paths.

Code Notes
Embedding example (post with comments):
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

Referencing example (post with author):
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

Fetching referenced data with populate:
```js
const post = await Post.findOne().populate("author");
console.log(post.author.name); // hydrated author doc
```

What I Practiced
- Created blog-style models (Posts, Users, Comments).
- Embedded comments inside posts; referenced users as authors.
- Used populate() to pull author details with a post query.

Challenges and Trade-offs
- Choosing embed vs reference for each relation.
- Grasping populate mechanics and when to avoid overuse on hot paths.
- Balancing read performance against consistency and duplication.

Tomorrow’s Plan (Day 77)
- Start authentication flow.
- Learn password hashing with bcrypt.
- Implement user signup and persist new users.