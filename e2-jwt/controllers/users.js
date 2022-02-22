import bcrypt from 'bcryptjs'
import { response } from 'express'
import db from '../models/index.js'

const User = db.users

export const getUsers = async (req, res) => {
    let users = await User.findAll({})

    if (!users) return res.status(404).json({ message: 'No users found' })

    return res.status(200).json(users)
}

export const getUser = async (req, res) => {
    let user = await User.findAll({ where: { id: req.params.id } })

    if (!user) return res.status(404).json({ message: 'No user found' })

    return res.status(200).json(user)
}

export const registerUser = async (req, res) => {
    const { name, surname, email, password } = req.body

    if (!name || !surname) return res.status(400).json({ message: 'Name and surname required' })
    if (!email) return res.status(400).json({ message: 'Email required' })
    if (!password) return res.status(400).json({ message: 'Password required' })
    if (password.length < 6) return res.status(400).json({ message: 'Password too short' })

    const salt = await bcrypt.genSalt(12);
    let hashedPassword = await bcrypt.hash(password, salt)

    let user = {
        name: name + ' ' + surname,
        email: email,
        password: hashedPassword
    }

    let newUser = await User.create(user);

    if (!newUser) return res.status(400).json({ message: 'Error' })

    return res.status(200).json(newUser)
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    let user = await User.findAll({ where: { email: email } })

    user = user[0]

    if (!user) return res.status(404).json({ message: 'No user found' })

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' })

    return res.status(200).json({ message: 'Successfully logged in', user: user })

}