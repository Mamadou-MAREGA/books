const express = require('express');
const Product = require('../models/Product');
const Category = require('../models/Category');
const router = express.Router();
const {
    getProducts,
    createProduct,
    getSingleProduct
} = require('../controllers/productController');
const moreResults = require('../middlewares/moreResult');

router.route('/')
    .get(moreResults(Product ,{
        path: 'category',
        select: 'title'
    }), getProducts)
    .post(createProduct);

router.route('/:id')
    .get(getSingleProduct);

module.exports = router;
