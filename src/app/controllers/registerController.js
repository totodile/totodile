const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
  async index (req, res, next) {
    return res.render('auth/register', { title: 'Register page' })
  },

  async store (req, res, next) {
    let { name, email, password } = req.body
    password = await bcrypt.hash(password, 10)

    const user = await User.findOne({
      where: { email: email }
    })

    if (user) {
      return res.status(409).json({ errors: [{ email: 'email already exists' }] })
    }

    await User.create({ name, email, password })

    res.redirect('/login')
  }
}
