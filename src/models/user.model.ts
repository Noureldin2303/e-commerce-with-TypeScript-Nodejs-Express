import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: { type: String},
  email: { type: String },
  password: { type: String },
})

const User = model('users', userSchema)

export default User