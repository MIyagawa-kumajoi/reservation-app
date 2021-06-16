const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('', (req, res) => {
  Product.find({}, (err, founnProducts) => {
    return res.json(founnProducts);
  });
});

router.get('/:productId', (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId, (err, founnProduct) => {
    if(err) {
      return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found'}]});
    }
    return res.json(founnProduct);
  });
});

module.exports = router;

