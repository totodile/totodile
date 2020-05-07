const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
  async index (req, res, next) {
    return res.render('auth/login', { title: 'Login page' })
  },

  async login (req, res, next) {
    const { email, password } = req.body

    const user = await User.findOne({
      where: { email: email }
    })

    if (user) {
      await bcrypt.compare(password, user.password, function (err, isMatch) {
        if (err) {
          throw err
        } else if (!isMatch) {
          return res.send("Password doesn't match!")
        } else {
          return res.send('Password matches!')
        }
      })
    } else {
      return res.send('user not found!')
    }
  }
}
