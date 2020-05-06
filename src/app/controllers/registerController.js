const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
  async index (req, res, next) {
    return res.render('auth/register', { title: 'Register page' })
  },

  async store (req, res, next) {
    let { name, email, password } = req.body
    password = await bcrypt.hash(password, 10)

    const user = await User.findAll({
      limit: 1, where: { email: email }
    })

    if (user.length) {
      return res.status(409).json({ error: 'user already exists' })
    }

    const newUser = await User.create({ name, email, password })
    return res.status(201).json(newUser)
  }
}
