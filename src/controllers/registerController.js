exports.index = (req, res, next) => {
  res.render('auth/register', { title: 'Register page' })
}
