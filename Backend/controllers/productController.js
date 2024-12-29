const { upload } = require("../utils/fileUpload"); // assuming this is handling file upload via multer or any other method
const fs = require("fs");
const path = require("path");
const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;
    const sellerId = req.user.userId;

    // Validate required fields
    if (!title || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Upload image if provided
    let fileData = '';
    if (req.file) {
      const filePath = path.join(__dirname, '../uploads', req.file.filename); // Get file path

      // Read the image file and convert to base64
      const image = fs.readFileSync(filePath);
      fileData = image.toString('base64');

      // Optionally delete the file after reading (if not using the file system to store)
      fs.unlinkSync(filePath);
    }

    // Create product with image data (base64 string)
    const product = new Product({
      title,
      description,
      price,
      category,
      image: fileData,  // Store base64-encoded image
      seller: sellerId,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Product creation error:", error);
    res.status(500).json({ message: "Failed to create product" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ createdAt: -1 })
      .populate("seller", "name");
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// Get product by ID (with image)
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("seller", "name");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // If image exists, serve the base64 image
    if (product.image) {
      return res.status(200).json({ ...product.toObject(), image: `data:image/jpeg;base64,${product.image}` });
    } else {
      return res.status(404).json({ message: "No image associated with the product" });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Failed to fetch product" });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const sellerId = req.user.userId;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if the user is the seller
    if (product.seller.toString() !== sellerId) {
      return res.status(403).json({ message: "Not authorized to update this product" });
    }

    // Update product fields
    const updates = req.body;
    if (req.file) {
      // Upload new image if provided and update image field
      const filePath = path.join(__dirname, '../uploads', req.file.filename);
      const image = fs.readFileSync(filePath);
      updates.image = image.toString('base64'); // Store new image as base64
      fs.unlinkSync(filePath); // Clean up the temporary uploaded file
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Product update error:", error);
    res.status(500).json({ message: "Failed to update product" });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const sellerId = req.user.userId;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if the user is the seller
    if (product.seller.toString() !== sellerId) {
      return res.status(403).json({ message: "Not authorized to delete this product" });
    }

    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Product deletion error:", error);
    res.status(500).json({ message: "Failed to delete product" });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
