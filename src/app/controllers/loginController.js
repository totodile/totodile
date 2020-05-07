module.exports = {
  async index (req, res, next) {
    return res.render('auth/login', { title: 'Login page' })
  }
}
