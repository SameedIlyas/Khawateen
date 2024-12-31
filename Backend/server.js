const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require('./routes/chatRoutes');
const productRoutes = require("./routes/productRoutes");
const courseRoutes = require("./routes/courseRoutes");
const { errorHandler, notFoundHandler } = require("./middlewares/errorHandler");
const corsSetup = require("./middlewares/corsSetup");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});
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
app.use("/api/courses", courseRoutes);
app.use('/api/chat', chatRoutes);

// 404 Route Handler
app.use(notFoundHandler);

// Global Error Handling
app.use(errorHandler);

// Socket.IO events
io.on('connection', (socket) => {
  console.log('New user connected');

  // Listen for new messages
  socket.on('chatMessage', (message) => {
    io.emit('message', message);  // Broadcast message to all clients
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start Server
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Graceful Shutdown
/*process.on("SIGINT", async () => {
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
});*/
