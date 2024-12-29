const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
//const emailRoutes = require("./routes/contactRoutes");
const productRoutes = require("./routes/productRoutes");
const { errorHandler, notFoundHandler } = require("./middlewares/errorHandler");
const corsSetup = require("./middlewares/corsSetup");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Setup
app.use(corsSetup);
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/auth", authRoutes);
//app.use("/api/contact", emailRoutes);
app.use("/api/products", productRoutes);

// 404 Route Handler
app.use(notFoundHandler);

// Global Error Handling
app.use(errorHandler);

// Start Server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Graceful Shutdown
process.on("SIGINT", async () => {
  console.log("\n🛑 Graceful shutdown initiated");
  server.close(() => {
    console.log("🛑 HTTP server closed");
    mongoose.connection.close(false, () => {
      console.log("🛑 MongoDB connection closed");
      process.exit(0);
    });
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  process.exit(0);
});
