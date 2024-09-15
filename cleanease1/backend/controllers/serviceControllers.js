const Service = require('../models/service');

exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json({ success: true, data: services });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.createService = async (req, res) => {
    const { name, description, price } = req.body;


    if (!name || !description || !price) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        const newService = new Service({ name, description, price });
        await newService.save();
        res.status(201).json({ success: true, data: newService });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
