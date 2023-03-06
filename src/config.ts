import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const { PORT, MONGOS_CONNECTION_LINK, JWT_SECERT, EXPIRES_IN } = process.env

const DBconnection = async () => {
  mongoose.set('strictQuery', false)
  try {
    await mongoose.connect(MONGOS_CONNECTION_LINK as string);
    console.log('MONGODB connected..........')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default {
  connect: DBconnection,
  port: PORT,
  JWT_SECERT: JWT_SECERT,
  EXPIRES_IN: EXPIRES_IN,
}