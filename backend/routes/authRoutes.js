const express = require('express')
const router = express.Router()
const { UserLogin } = require('../controllers/authControllers.js')

router.post('/login', UserLogin)

module.exports = router
