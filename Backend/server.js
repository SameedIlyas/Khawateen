const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./utils/db");

// Import routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const resourceRoutes = require("./routes/resourceRoutes");
const mentorshipRoutes = require("./routes/mentorshipRoutes");
const forumRoutes = require("./routes/forumRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Route middlewares
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/mentorships", mentorshipRoutes);
app.use("/api/forums", forumRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
