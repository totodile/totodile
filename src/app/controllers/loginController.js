module.exports = {
  async index (req, res, next) {
    return res.render('auth/login', { title: 'Login page' })
  },

  async login (req, res, next) {
    const { email, password } = req.body

    return res.json({ email, password })
  }
}
