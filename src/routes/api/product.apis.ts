import express,{ Router } from 'express'
import productController from '../../controllers/product.controller';

const router : Router = express.Router();

router.get('/',productController.getAllProducts)
router.post('/',productController.addProduct)
router.get('/:id',productController.getSpecificProduct)

export default router