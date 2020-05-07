const passport = require('passport')
const express = require('express')
const router = express.Router()

// validation middleware
const { registerValidation, validate } = require('../app/middlewares/valitator')

// auth middleware
const { isAuth, isNotAuth } = require('../app/middlewares/auth')

// controllers
const loginController = require('../app/controllers/loginController')
const registerController = require('../app/controllers/registerController')

router.get('/login', isNotAuth, loginController.index)

router.post('/login', isNotAuth, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

router.get('/register', isNotAuth, registerController.index)
router.post('/register', isNotAuth, registerValidation(), validate, registerController.store)

router.delete('/logout', isAuth, (req, res, next) => {
  req.logOut()
  res.redirect('/login')
})

module.exports = router
