const User = require('../models/User.js');
const Student = require('../models/Student.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserLogin = async (req, res) => {
    const { email, password } = req.body;

    const loginUser = await User.findOne({ email }).exec()

    if (!loginUser)
        return res.status(400).json({ status: 'Email not found' })

    if (!(await bcrypt.compare(password, loginUser.password)))
        return res.status(400).json({ status: 'Password is incorrect' })

    const accessToken = jwt.sign(
        {
            _id: loginUser._id,
            email: loginUser.email,
            role: loginUser.role
        },
        process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' })

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 1000 * 60 * 60 * 30
    })

    res.status(200).json({ status: 'Login success' })
}

const UserLogout = (req, res) => {
    res.clearCookie('accessToken')
    res.status(200).json({ status: 'Logout success' })
}

const UserResetPassword = async (req, res) => {
    const { password, newPassword } = req.body
    const user = req.user

    if (password === newPassword)
        return res.status(400).json({ status: 'New password must be different from old password' })

    await User.findOne({ email: user.email })
        .then(async (user) => {
            if (!(await bcrypt.compare(password, user.password)))
                return res.status(400).json({ status: 'Password is incorrect' })

            await User.findByIdAndUpdate(user._id, { password: await bcrypt.hash(newPassword, 10) })
                .then(() => {
                    res.status(200).json({ status: 'Password changed' })
                })
                .catch((err) => {
                    res.status(500).json({ error: err.message })
                })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        })
}

const isAuth = (req, res, next) => {
    const token = req.cookies.accessToken

    if (!token)
        return res.status(400).json({ status: 'Unauthorized' })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.status(403).json({ status: 'Forbidden', err })
        req.user = user
        next()
    })
}

const isWho = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role))
            return res.status(403).json({ status: 'Forbidden' })
        next()
    }
}

const isMe = async (req, res, next) => {
    const stdId = req.params.id
    const user = req.user

    if (user.role === 'admin')
        return next()

    await Student.findById(stdId)
        .then(async (student) => {
            await User.findOne({ email: user.email })
                .then((user) => {
                    if (student.email !== user.email)
                        return res.status(403).json({ status: 'Forbidden' })
                    next()
                })
                .catch((err) => {
                    res.status(500).json({ error: err.message })
                })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        })
}

module.exports = { UserLogin, UserLogout, UserResetPassword, isAuth, isWho, isMe }
