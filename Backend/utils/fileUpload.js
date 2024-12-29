const multer = require('multer');
const path = require("path");

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Specify where to save uploaded files (temporarily before base64 conversion)
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);  // Set the filename to be unique
  }
});

// Multer configuration
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
