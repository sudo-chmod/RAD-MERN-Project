const express = require('express')
const router = express.Router()
const { UserLogin, isAuth, UserLogout, UserResetPassword } = require('../controllers/authControllers.js')

router.post('/login', UserLogin)
router.get('/logout', isAuth, UserLogout)
router.post('/reset-password', isAuth, UserResetPassword)

module.exports = router
