# Day 84 – File Uploads Using Multer (Storing Files on Server)

### Overview

Today I learned how to handle file uploads in Node.js using **Multer**. I implemented single and multiple file uploads, explored how Multer stores files on the server, and displayed uploaded files using **EJS**.

### What I Learned Today

-   **What Multer is and why it’s used**
-   **How to configure `diskStorage`** to control filename and upload destination
-   **Single file uploads** (e.g., profile pictures)
-   **Multiple file uploads** (gallery, documents, etc.)
-   **Accessing file info** through `req.file` and `req.files`
-   **Showing uploaded files in the UI** using EJS templates

### Key Concepts

-   **Multer middleware** handles `multipart/form-data` that contains files
-   **Uploaded files** can be stored locally (disk) or later moved to cloud storage (S3, Cloudinary, etc.)
-   **`diskStorage`** lets you customize filenames and paths
-   Files are stored in a custom folder like `/uploads` (or any folder you configure)

### Multer Setup (`diskStorage`)

```js
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // folder to store files
    },
    filename: (req, file, cb) => {
        const unique = Date.now() + "-" + file.originalname;
        cb(null, unique);
    },
});

const upload = multer({ storage });
```

### Single File Upload Route

```js
app.post("/upload", upload.single("avatar"), (req, res) => {
    console.log(req.file);
    res.send("File uploaded successfully!");
});
```

### Multiple File Uploads

```js
app.post("/uploads", upload.array("photos", 5), (req, res) => {
    console.log(req.files);
    res.send("Multiple files uploaded!");
});
```

### EJS Form Example

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="avatar" />
    <button type="submit">Upload</button>
</form>
```

### Displaying Uploaded Image

```html
<img src="/uploads/<%= fileName %>" alt="uploaded file" />
```

### Static Folder Setup (so browser can access uploads)

```js
app.use("/uploads", express.static("uploads"));
```

### What I Built Today

-   **Single and multiple file upload system**
-   **Storage configuration** for unique filenames
-   An **`/uploads` folder** accessible from the browser
-   An **EJS form** that uploads files properly

### Challenges

-   Understanding the difference between **`req.file`** and **`req.files`**
-   Remembering to set `enctype="multipart/form-data"` in forms
-   Managing **file paths** when displaying uploads
-   Making sure **filenames are unique** to avoid overwriting

### Tomorrow’s Plan (Day 85)

-   Final review of the **backend**
-   Connect **frontend to backend**
-   Test **APIs and UI** together
-   Prepare **notes/documentation** for the entire backend journey
