const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Nodemailer transporter using Gmail + credentials from environment variables
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

app.get("/", (req, res) => {
    res.render("mail");
});

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

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
