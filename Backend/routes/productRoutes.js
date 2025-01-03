const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware.js');
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController.js');
const { upload } = require("../utils/fileUpload.js");  // Keep multer for uploading files

const router = express.Router();

// Use the same middleware to handle file uploads
router.post('/', authenticateToken, upload.single("image"), createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', authenticateToken, updateProduct);
router.delete('/:id', authenticateToken, deleteProduct);

module.exports = router;
