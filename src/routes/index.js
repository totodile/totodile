const express = require('express')
const router = express.Router()
const { isAuth } = require('../app/middlewares/auth')

const homeController = require('../app/controllers/homeController')

router.get('/', isAuth, homeController.index)

module.exports = router
