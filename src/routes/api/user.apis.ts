import express, { Router } from 'express'
import userController from '../../controllers/user.controller'

const router: Router = express.Router()

router.get('/', userController.getAllusers)
router.get('/:id', userController.getSpecificUser)
router.post('/register', userController.createUser)
router.post('/login', userController.authUser)
router.delete('/:id', userController.deleteUser)
router.put('/:id', userController.updateUser)
router.put('/change-password/:id', userController.changePassword)

export default router
