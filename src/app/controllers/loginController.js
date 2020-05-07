const passport = require('passport')

module.exports = {
  async index (req, res, next) {
    return res.render('auth/login', { title: 'Login page' })
  },
  login: passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
}
