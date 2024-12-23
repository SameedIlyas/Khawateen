const express = require("express");
const { createProduct, getProducts } = require("../controllers/productController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, createProduct);
router.get("/", getProducts);

module.exports = router;