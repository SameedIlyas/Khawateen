const Product = require("../models/Product");

const createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const product = await Product.create({
            name,
            description,
            price,
            entrepreneur: req.user.id,
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createProduct, getProducts };
