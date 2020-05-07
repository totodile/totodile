module.exports = {
  async index (req, res, next) {
    return res.render('index', { title: 'Home page', user: req.user })
  }
}
