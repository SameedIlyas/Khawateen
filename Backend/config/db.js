const mongoose = require("mongoose");
const User = require("../models/User");

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Check if an admin user exists
    const admin = await User.findOne({ role: "admin" });
    if (!admin) {
      // If no admin found, create one
      const newAdmin = new User({
        name: "admin",
        email: "admin@admin.com",
        password: "admin", // This will be hashed automatically by the pre-save middleware
        role: "admin",
      });

      await newAdmin.save(); // Save the new admin
      console.log("Admin user created");
    }
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
