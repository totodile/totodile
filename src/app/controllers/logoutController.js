module.exports = {
  async delete (req, res, next) {
    req.logOut()
    res.redirect('/login')
  }
}
