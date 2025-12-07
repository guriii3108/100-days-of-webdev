const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27018/day75")
  .then(() => {
    console.log("connected to database successfully");
  })
  .catch((err) => console.log(err.message));
const personalDetailsSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique:true , lowercase: true },
    // Basic Information
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    dateOfBirth: { type: Date },
    gender: { type: String, enum: ["male", "female", "other"] },
    phone: {
      // Contact Info
      type: String,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    email: { type: String, required: true, lowercase: true, trim: true },
    address: {
      // Address
      street: String,
      city: String,
      state: String,
      country: String,
      pincode: String},
    // Social Links
    social: {
      instagram: String,
      twitter: String,
      github: String,
      linkedin: String},
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
module.exports = mongoose.model("personalDetails", personalDetailsSchema);
