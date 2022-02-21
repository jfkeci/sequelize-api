import express from 'express'
let router = express.Router();

import {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    getPublishedProducts
} from "../controllers/products.js";

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', updateProduct);
router.get('/published', getPublishedProducts);


export default router;

