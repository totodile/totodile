const express = require('express')
const router = express.Router()

// controllers
const loginController = require('../controllers/loginController')
const registerController = require('../controllers/registerController')

router.get('/login', loginController.index)
router.get('/register', registerController.index)

module.exports = router
