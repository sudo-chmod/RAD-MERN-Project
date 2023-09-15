const express = require('express')
const router = express.Router()
const { UserLogin, isAuth, UserLogout, UserResetPassword, userRole } = require('../controllers/authControllers.js')

router.post('/login', UserLogin)
router.post('/logout', isAuth, UserLogout)
router.post('/reset-password', isAuth, UserResetPassword)
router.post('/role', userRole)

module.exports = router
