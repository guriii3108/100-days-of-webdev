const express = require("express");
const mongoose = require("mongoose");

// Connect to local Mongo instance
mongoose
  .connect("mongodb://localhost:27018/day76", {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("✅ Connected to MongoDB (day76)"))
  .catch((err) => console.error("Mongo connection error:", err.message));

const app = express();
app.use(express.json());

// --- Schemas (embedding comments, referencing author) ---
const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String,
      required: true,
      trim: true 
    },
    email: { 
      type: String,
      required: true,
      lowercase: true,
      trim: true 
      },
  },
  { timestamps: true }
);
const postSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true },

    content: { 
      type: String, 
      required: true },
    // Embedding: store comments directly in the post document
    comments: [commentSchema],

    // Referencing: store author id and hydrate via populate()
    author: { 
       type: mongoose.Schema.Types.ObjectId,
       ref: "User" },
  },
  { timestamps: true }
);
const commentSchema = new mongoose.Schema(
  {
    text: { 
      type: String,
      required: true },
    authorName: { 
      type: String,
      required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);



app.get("/", (_req, res) => {
  res.send("Day 76 - MongoDB relationships demo (embedding + referencing)");
});

// Seed an embedded example (comments live inside the post)
app.post("/posts/embed", async (req, res) => {
  try {
    const {
      title = "Embedded comments post",
      content = "Comments are embedded directly on the post document.",
      comments = [
        { text: "Great write-up", authorName: "Alice" },
        { text: "Thanks for sharing", authorName: "Bob" },
      ],
    } = req.body;

    const post = await Post.create({ title, content, comments });
    res.status(201).json({ success: true, mode: "embedded", post });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Seed a referenced example (post has a referenced author)
app.post("/posts/reference", async (req, res) => {
  try {
    const {
      title = "Referenced author post",
      content = "Author is stored as an ObjectId reference.",
      name = "Demo Author",
      email = "demo@author.test",
    } = req.body;

    const existingUser = await User.findOne({ email });
    const author = existingUser || (await User.create({ name, email }));

    const post = await Post.create({ title, content, author: author._id });
    res.status(201).json({ success: true, mode: "referenced", post });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Add an embedded comment to an existing post
app.post("/posts/:id/comments", async (req, res) => {
  try {
    const { text = "No text provided", authorName = "Anonymous" } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }
    post.comments.push({ text, authorName });
    await post.save();
    res.status(201).json({ success: true, post });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Fetch posts and hydrate referenced authors
app.get("/posts", async (_req, res) => {
  try {
    const posts = await Post.find().populate("author", "name email");
    res.json({ success: true, count: posts.length, posts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Basic user listing (for reference data)
app.get("/users", async (_req, res) => {
  try {
    const users = await User.find();
    if (!users.length) {
      return res
        .status(404)
        .json({ success: false, message: "No users found" });
    }
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
