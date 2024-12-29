// Middleware for handling 404 and global errors
const errorHandler = (err, req, res, next) => {
    console.error("💥 Error:", err.stack);
    res.status(err.status || 500).json({
      message: err.message || "Something went wrong!",
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
  };
  
  const notFoundHandler = (req, res, next) => {
    res.status(404).json({ message: "API route not found" });
  };
  
  module.exports = { errorHandler, notFoundHandler };
  