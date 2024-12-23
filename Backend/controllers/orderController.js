const Order = require("../models/Order");
const sendEmailNotification = require("../utils/emailNotification");

exports.createOrder = async (req, res) => {
    const { productId, sellerId } = req.body;
    try {
        const order = await Order.create({
            product: productId,
            buyer: req.user._id,
            seller: sellerId,
        });

        sendEmailNotification(sellerId, "New Order Received", "You have a new order.");
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: "Error creating order" });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ buyer: req.user._id }).populate("product");
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Error fetching orders" });
    }
};
