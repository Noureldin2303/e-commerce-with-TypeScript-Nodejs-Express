import express,{Application , Request , Response, Router} from 'express';
import userRouter from './api/user.apis'
import productRouter from './api/product.apis'

const router = express.Router()

router.use('/user', userRouter)
router.use('/product', productRouter)

export default router