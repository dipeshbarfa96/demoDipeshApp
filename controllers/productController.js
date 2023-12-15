const db = require('../models')

// create main model

const Product = db.products
const Review = db.reviews

// main work

// 1.create product

const addProduct = async (req, res) => {
    // this is a coment
    // const { title, price,description,published} = req.body;
    // this is new coment
     console.log(req.body)
    // Create a new product with the provided title
    const newProduct = await Product.create({

        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    res.status(200).send(newProduct)
    console.log(newProduct)
}

// 2.get all products

const getAllProducts = async (req, res) => {
    const products = await Product.findAll({})
    res.status(200).send(products)
}

// 3.get one products

const getOneProduct = async (req, res) => {

    let id = req.params.id
    const product = await Product.findOne({where: { id: id}})
    res.status(200).send(product)
}

// 4  Update products

const updateProduct = async (req, res) => {

    let id = req.params.id
    
    const product = await Product.update(req.body, { where: { id: id}})
     
    res.status(200).send(product)
}

// 5 delete product by id

const deleteProduct = async (req, res) => {

    let id = req.params.id
      await Product.destroy({where: { id: id}})
      res.status(200).send('product is deleted')
}

// 6. published product

const getPublishedProduct = async (req, res) =>{
     
    const products = await Product.findAll({ where: { published: true}})
    res.status(200).send(products)
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
}