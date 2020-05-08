const User = require('../models/User')

module.exports = {
  async index (req, res, next) {
    return res.render('auth/register', { title: 'Register page' })
  },
  async store (req, res, next) {
    const { name, email, password } = req.body

    const user = await User.findOne({ where: { email: email } })
    if (user) {
      req.flash('error', ['email already exists'])
      return res.redirect('/register')
    }
    await User.create({ name, email, password })

    res.redirect('/login')
  }
}
