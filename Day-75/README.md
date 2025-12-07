# Day 75 – Mongoose Detailed Model + EJS Form + Saving Data

## Overview
Built a comprehensive user registration system with a detailed Mongoose schema featuring nested objects, validations, a beautiful EJS form with multiple sections, and a complete workflow to save submitted data to MongoDB.

## What I Learned Today
- Creating advanced Mongoose schemas with nested objects (`address`, `social`)
- Using validation fields (`required`, `trim`, `unique`, `enum`, `match`, `lowercase`)
- Server-side rendering with EJS templates
- Handling POST form data with `express.urlencoded()`
- Structuring complex forms with multiple sections
- Error handling for duplicate usernames
- Using `timestamps` option for automatic `createdAt` and `updatedAt` fields

## Key Concepts

### Mongoose Schema Design
- **Nested Objects**: Organize related fields into sub-objects (e.g., `address`, `social`)
- **Validation**: Mongoose automatically validates data before saving
- **Unique Constraints**: Prevent duplicate entries (e.g., unique username)
- **Data Transformation**: Use `lowercase`, `trim` to normalize input

### EJS & Form Handling
- **Server-Side Rendering**: EJS allows dynamic HTML generation on the server
- **Form Data Parsing**: `express.urlencoded({ extended: true })` is required to parse POST form data
- **Structured Forms**: Organize complex forms into logical sections for better UX

## Project Structure

```
Day-75/
├── index.js              # Express server and routes
├── models/
│   └── user.model.js     # Mongoose schema definition
└── views/
    └── index.ejs         # Registration form template
```

## Detailed Mongoose Schema

```javascript
const personalDetailsSchema = new mongoose.Schema({
  // Authentication & Identity
  userName: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true 
  },
  
  // Basic Information
  firstName: { 
    type: String, 
    required: true, 
    trim: true 
  },
  lastName: { 
    type: String, 
    trim: true 
  },
  dateOfBirth: { 
    type: Date 
  },
  gender: { 
    type: String, 
    enum: ["male", "female", "other"] 
  },
  
  // Contact Information
  phone: {
    type: String,
    match: [/^\d{10}$/, "Phone number must be 10 digits"]
  },
  email: { 
    type: String, 
    required: true, 
    lowercase: true, 
    trim: true 
  },
  
  // Nested Address Object
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    pincode: String
  },
  
  // Nested Social Links Object
  social: {
    instagram: String,
    twitter: String,
    github: String,
    linkedin: String
  },
  
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true }); // Automatically adds createdAt & updatedAt
```

## Express Server Setup

```javascript
const express = require("express");
const app = express();

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as view engine
app.set("view engine", "ejs");

// Render registration form
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Handle form submission
app.post("/register", async (req, res) => {
  const {
    userName, email, firstName, lastName, gender,
    dateOfBirth, phone, street, city, state, country, pincode,
    instagram, twitter, github, linkedin
  } = req.body;
  
  // Check for duplicate username
  let user = await userModel.findOne({ userName });
  if (user) {
    return res.status(500).send("User already registered");
  }
  
  // Create new user with nested objects
  let createdUser = await userModel.create({
    userName, email, firstName, lastName, gender, dateOfBirth, phone,
    address: { street, city, state, country, pincode },
    social: { instagram, twitter, github, linkedin }
  });
  
  res.send(createdUser);
});
```

## EJS Form Features

The registration form includes:
- **Personal Information Section**: Username, email, name, gender, date of birth, phone
- **Address Section**: Street, city, state, country, pincode
- **Social Links Section**: Instagram, Twitter, GitHub, LinkedIn
- **Modern UI**: Built with Tailwind CSS, dark theme, responsive design
- **Form Validation**: HTML5 validation (required fields, email type, phone pattern)

## What I Built Today
- ✅ A comprehensive Mongoose schema with nested objects and validations
- ✅ A multi-section EJS registration form with modern UI
- ✅ Complete POST route with duplicate username checking
- ✅ Proper form data parsing and database integration
- ✅ Error handling for registration conflicts

## Challenges Faced
- **Schema Structure**: Organizing fields into logical nested objects
- **Form Data Mapping**: Mapping flat form data to nested schema structure
- **Unique Constraints**: Handling duplicate username errors gracefully
- **Validation**: Ensuring phone numbers match the required format

## Key Takeaways
- Nested objects in Mongoose schemas help organize related data
- `express.urlencoded()` is essential for parsing form POST requests
- EJS enables server-side rendering for dynamic content
- Mongoose validations run automatically before saving to database
- Always check for duplicates before creating new records

## Tomorrow's Plan (Day 76)
- Implement full CRUD operations (Create, Read, Update, Delete)
- Display saved data via EJS templates
- Create edit and delete routes
- Build a user list/dashboard page
