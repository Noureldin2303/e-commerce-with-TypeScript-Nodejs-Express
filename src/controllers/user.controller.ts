import { Request, Response } from 'express'
import User from '../models/user.model'


const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body)
    //check if user is already exists
    const ChkUser = await User.findOne({ email: req.body.email }).exec()

    if (ChkUser) return res.status(400).json('user already exists')

    await user.save()

    res.status(200).json('user added successfully')
  } catch (err) {
    res.status(500).json({ message: 'Internal server error: ', err })
  }
}

const getAllusers = async (_req: Request, res: Response) => {
  try {
    let user = await User.find()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ message: 'Internal server error: ', err })
  }
}

const getSpecificUser = async (req: Request, res: Response) => {
  let user
  try {
    user = (await User.findOne({ _id: req.params.id })) as any

    if (!user) return res.status(404).json('user does not exists')

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ message: 'Internal server error: ', err })
  }
}

export default {
  createUser,
  getAllusers,
  getSpecificUser
}
