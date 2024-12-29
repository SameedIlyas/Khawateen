const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;
const path = require("path");
const fs = require("fs");


// Load environment variables from .env file
require('dotenv').config();

// MongoDB URI (your MongoDB Atlas URI)
const mongoURI = process.env.MONGODB_URI;

// Check if mongoURI is defined
if (!mongoURI) {
    throw new Error("MongoDB URI is not defined. Please set the MONGODB_URI environment variable.");
  }
  

// File storage configuration using GridFS
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return {
      bucketName: "uploads", // Bucket name for storing files
      filename: `${Date.now()}-${file.originalname}`, // Unique filename
    };
  },
});

// Multer configuration to handle file upload with GridFS
const upload = multer({ storage });

// Function to format file size
const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) return "0 Bytes";
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return `${parseFloat((bytes / Math.pow(1000, index)).toFixed(dm))} ${sizes[index]}`;
};

module.exports = { upload, fileSizeFormatter };
