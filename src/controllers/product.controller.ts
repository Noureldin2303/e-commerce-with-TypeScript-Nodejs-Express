import { Request, Response } from 'express'
import Product from '../models/product.model'

const addProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body)

    await product.save()
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const product = await Product.find()
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const product = (await Product.findOne({ _id: req.params.id })) as any

    if (!product) return res.status(404).json('Product not found')

    res.status(200).json(product)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  Product.findByIdAndRemove({ _id: req.params.id })
    .then((product) =>
      res.status(200).json({ message: 'Product deleted successfully', product })
    )
    .catch((err) => res.status(400).json(err))
}

const updateProduct = async (req: Request, res: Response) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then((product) =>
      res.status(200).json({ message: 'Product updated successfully', product })
    )
    .catch((err) => res.status(400).json(err))
}

export default {
  addProduct,
  getAllProducts,
  getSpecificProduct,
  deleteProduct,
  updateProduct,
}
