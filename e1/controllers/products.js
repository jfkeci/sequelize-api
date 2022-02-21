import db from '../models/index.js'

const Product = db.products

export const createProduct = async (req, res) => {
    let product = req.body

    const newProduct = await Product.create(product)

    return res.status(200).json(newProduct)
}

export const getProducts = async (req, res) => {
    const products = Product.findAll({});

    return res.status(200).json(products)
}

export const getProduct = async (req, res) => {
    const product = await Product.find({ where: { id: req.params.id } })

    res.status(200).json(product)
}

export const updateProduct = async (req, res) => {
    const updatedProduct = await Product.update(req.body, { where: { id: req.params.id } })

    res.status(200).json(updatedProduct)
}

export const deleteProduct = async (req, res) => {
    let deleted = await Product.destroy({ where: { id: req.params.id } })

    if (deleted) return res.status(200).json({ message: 'Success' })

    return res.status(400).json({ message: 'Error' })
}

export const getPublishedProducts = async (req, res) => {
    const products = await Product.findAll({ where: { published: true } })

    return res.status(200).json(products)
}