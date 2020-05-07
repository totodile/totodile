exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

exports.isNotAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect('/')
  }
  next()
}
