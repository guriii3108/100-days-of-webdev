## Day 85 – Sending Emails Using Nodemailer

### Overview

Today I built a small Express server that can send emails using **Nodemailer** and a simple **EJS** form.  
The goal was to understand how to configure a mail transporter, handle form input, and send real emails from a Node.js backend.

### What I Learned

-   **Nodemailer basics**: what it is and when to use it.
-   **SMTP concepts**: transport, auth credentials, and providers (e.g. Gmail).
-   **Creating a transporter** to handle outgoing emails.
-   **Sending emails** with `transporter.sendMail()`.
-   **Handling success and error responses** from Nodemailer.
-   **Storing credentials securely** using environment variables.

### Key Concepts

-   Nodemailer allows backend applications to send transactional emails.
-   You must configure a transport (service or SMTP host/port) plus authentication.
-   Emails can be plain text or HTML and support attachments, templates, etc.
-   Secrets like email + password must **never** be hard‑coded; use `.env` instead.

---

### Project Structure

-   `index.js` – Express server and Nodemailer configuration.
-   `views/mail.ejs` – Minimal, Tailwind‑styled email form (dark, modern UI).
-   `.env` (not committed) – Holds `EMAIL`, `PASS`, and optional `PORT`.

---

### Server & Nodemailer Setup

```js
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Nodemailer transporter using Gmail credentials from environment variables
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});
```

### Sending an Email (Route Logic)

```js
app.post("/mail", async (req, res) => {
    const { email, subject, text } = req.body;

    if (!email || !subject || !text) {
        return res.status(400).json({
            success: false,
            message: "Email, subject and text are required.",
        });
    }

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject,
        text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.messageId);

        return res
            .status(200)
            .json({ success: true, message: "Email sent successfully." });
    } catch (error) {
        console.error("Error sending email:", error);

        return res.status(500).json({
            success: false,
            message: "Email failed to send. Please try again.",
        });
    }
});
```

### Example Email Form (`views/mail.ejs`)

The form posts to `/mail` with three fields: `email`, `subject`, and `text`.

```html
<form action="/mail" method="post" class="space-y-4">
    <div>
        <label for="email">To</label>
        <input id="email" type="email" name="email" required />
    </div>

    <div>
        <label for="subject">Subject</label>
        <input id="subject" type="text" name="subject" required />
    </div>

    <div>
        <label for="text">Message</label>
        <textarea id="text" name="text" rows="5" required></textarea>
    </div>

    <button type="submit">Send mail</button>
</form>
```

---

### Challenges

-   Handling **SMTP authentication errors** when credentials are wrong.
-   Dealing with Gmail security (app passwords / less secure app access).
-   Making sure environment variables are loaded correctly with `dotenv`.
-   Returning clear JSON responses and HTTP status codes for success/failure.

### What’s Next

-   Add support for **HTML email templates** and richer content.
-   Attach files (e.g. PDFs, images) to outgoing emails.
-   Build automated flows like **welcome emails** and **password reset** links.
