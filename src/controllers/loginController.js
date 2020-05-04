exports.index = (req, res, next) => {
  res.render('auth/login', { title: 'Login page' })
}
