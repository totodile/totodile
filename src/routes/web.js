const express = require('express')
const router = express.Router()

// middlewares
const { isAuth, isNotAuth } = require('../app/middlewares/auth')
const { registerValidation, validate } = require('../app/middlewares/valitator')

// controllers
const homeController = require('../app/controllers/homeController')
const loginController = require('../app/controllers/loginController')
const registerController = require('../app/controllers/registerController')
const logoutController = require('../app/controllers/logoutController')

router.get('/', isAuth, homeController.index)
router.get('/login', isNotAuth, loginController.index)
router.post('/login', isNotAuth, loginController.login)
router.get('/register', isNotAuth, registerController.index)
router.post('/register', isNotAuth, registerValidation(), validate, registerController.store)
router.delete('/logout', isAuth, logoutController.delete)

module.exports = router
