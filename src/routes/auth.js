const express = require('express')
const router = express.Router()

// controllers
const loginController = require('../app/controllers/loginController')
const registerController = require('../app/controllers/registerController')

router.get('/login', loginController.index)
router.post('/login', loginController.login)

router.get('/register', registerController.index)
router.post('/register', registerController.store)

module.exports = router
