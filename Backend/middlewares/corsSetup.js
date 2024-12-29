const cors = require("cors");

const corsSetup = cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

module.exports = corsSetup;
