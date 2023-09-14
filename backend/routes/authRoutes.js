const express = require('express')
const router = express.Router()
const { UserLogin, isAuth, UserLogout, UserResetPassword, userRole } = require('../controllers/authControllers.js')

router.post('/login', UserLogin)
router.post('/logout', UserLogout)
router.post('/reset-password', UserResetPassword)
router.post('/role', userRole)

module.exports = router
