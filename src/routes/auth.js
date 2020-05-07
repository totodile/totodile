const express = require('express')
const router = express.Router()

// validation middleware
const { registerValidation, validate } = require('../app/middlewares/valitator')

// controllers
const loginController = require('../app/controllers/loginController')
const registerController = require('../app/controllers/registerController')

router.get('/login', loginController.index)
router.post('/login', loginController.login)

router.get('/register', registerController.index)
router.post('/register', registerValidation(), validate, registerController.store)

module.exports = router
