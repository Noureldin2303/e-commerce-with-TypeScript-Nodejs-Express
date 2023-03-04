import { Schema, model } from 'mongoose'

const productSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  colors: { type: Array },
  sizes: { type: Array },
})

const Product = model('products', productSchema)

export default Product
