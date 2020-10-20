const Product = require('../models/Product');
const CustomError = require('../utilities/customError');
const asyncMiddleware = require('../middlewares/asyncMiddleware');

// To get all product
exports.getProducts = asyncMiddleware( async (req, res, next) => {

    const prod = await Product.find({}).populate({
        path: 'category',
        select: 'title'
    });
    res.json({products: prod});

    //res.json({error: 'Something went wrong'});
    //next(new CustomError('Something went wrong', 500));
    res.json({
        success: false,
        error: new CustomError(new CustomError('Something went wrong', 500))
    })

});

exports.getSingleProduct = async (req, res) => {
    const prodId = req.params.id;
    const prod = await Product.findById(prodId);

    if (prod) {
        res.json({product: prod});
    } else {
        res.json({message: 'Product not found'})
    }
};

exports.createProduct = async (req, res) => {

    const product = await Product.create(req.body);

    if (product) {
        res.status(200).json({
            success: true,
            product: product
        })
    }
};
