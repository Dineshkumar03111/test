const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceControllers');

router.get('/services', serviceController.getServices);
router.post('/services', serviceController.createService);

module.exports = router;
