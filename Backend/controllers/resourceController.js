const Resource = require("../models/Resource");

exports.addResource = async (req, res) => {
    try {
        const { title, description, link, category } = req.body;
        const resource = await Resource.create({
            title,
            description,
            link,
            category,
            addedBy: req.user._id,
        });
        res.status(201).json({ success: true, resource });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.find().populate("addedBy", "name email");
        res.status(200).json({ success: true, resources });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
