const productController = require ('../controllers/productController.js')
const express = require('express');
const router = express.Router();

router.post('/addProduct', productController.addProduct)
router.get('/allProducts', productController.getAllProducts)
router.get('/publised', productController.getPublishedProduct)


router.get('/:id', productController.getOneProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)


module.exports = router