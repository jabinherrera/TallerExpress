import { Router } from 'express';

import {
    createProduct,
    editProductById,
    deleteProductById,
    listProduct,
} from '../controllers/product.controller.js'

const router = Router();

router.post('/products', createProduct)
router.put('/products/:productId', editProductById)
router.delete('/products/:productId', deleteProductById)
router.get('/products', listProduct)

export default router;