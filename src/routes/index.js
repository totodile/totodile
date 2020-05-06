const express = require('express')
const router = express.Router()

// controllers
const homeController = require('../app/controllers/homeController')

/* GET home page. */
router.get('/', homeController.index)

module.exports = router
