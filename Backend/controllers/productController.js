const Product = require("../models/Product");
const { upload, fileSizeFormatter } = require("../utils/fileUpload");
const { gfs } = require("../utils/gridfs");

const createProduct = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;
    const sellerId = req.user.userId;

    // Validate required fields
    if (!title || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Upload image if provided
    let fileData;
    if (req.file) {
      try {
        const file = req.file; // Multer handles file storage

        // Save file to GridFS
        const writeStream = gfs.createWriteStream({
          filename: file.originalname,
          content_type: file.mimetype,
        });

        const fileStream = fs.createReadStream(file.path);
        fileStream.pipe(writeStream);

        writeStream.on("close", async (uploadedFile) => {
          fileData = {
            fileName: uploadedFile.filename,
            filePath: uploadedFile._id, // Use file ID from GridFS
            fileType: file.mimetype,
            fileSize: fileSizeFormatter(file.size, 2),
          };

          // Create product with image data
          const product = new Product({
            title,
            description,
            price,
            category,
            image: fileData,
            seller: sellerId,
          });

          const savedProduct = await product.save();
          res.status(201).json(savedProduct);
        });

        writeStream.on("error", (err) => {
          console.error("GridFS upload error:", err);
          return res.status(500).json({ message: "Failed to upload image" });
        });

      } catch (error) {
        console.error("GridFS upload error:", error);
        return res.status(500).json({ message: "Failed to upload image" });
      }
    } else {
      return res.status(400).json({ message: "Image is required" });
    }
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

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("seller", "name");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // If image exists in product, fetch it from GridFS
    if (product.image && product.image.filePath) {
      const file = await gfs.files.findOne({ _id: mongoose.Types.ObjectId(product.image.filePath) });

      if (file) {
        // Serve image as stream
        const readStream = gfs.createReadStream(file._id);
        readStream.pipe(res);
      } else {
        return res.status(404).json({ message: "Image not found in GridFS" });
      }
    } else {
      return res.status(404).json({ message: "Product image not found" });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Failed to fetch product" });
  }
};


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

    // Update product
    const updates = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Product update error:", error);
    res.status(500).json({ message: "Failed to update product" });
  }
};

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
