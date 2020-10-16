const express = require('express');
const Product = require('../models/Product');
const router = express.Router();
const prodController = require('../controllers/productController');

router.route('/')
    .get(prodController.getProducts)
    .post(prodController.createProduct);

router.route('/:id')
    .get(prodController.getSingleProduct);

module.exports = router;
