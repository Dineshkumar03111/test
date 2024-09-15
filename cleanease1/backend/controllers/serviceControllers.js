const Service = require('../models/service');

// Get all services
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new service
exports.createService = async (req, res) => {
    const { name, description, price } = req.body;

    try {
        const newService = new Service({ name, description, price });
        await newService.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
