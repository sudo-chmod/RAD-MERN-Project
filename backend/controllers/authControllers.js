const User = require('../models/User.js');
const Student = require('../models/Student.js');
const Teacher = require('../models/Teacher.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserLogin = async (req, res) => {
    const { email, password } = req.body;

    const loginUser = await User.findOne({ email })

    if (!loginUser)
        return res.json({ status: false, message: 'Email not found' })

    if (!(await bcrypt.compare(password, loginUser.password)))
        return res.json({ status: false, message: 'Password is incorrect' })

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

    res.json({ status: true, message: 'Login success', role: loginUser.role })
}

const UserLogout = (req, res) => {
    res.clearCookie('accessToken')
    res.json({ status: true, message: 'Logout success' })
}

const UserResetPassword = async (req, res) => {
    const { password, newPassword } = req.body
    const user = req.user

    if (password === newPassword)
        return res.json({ status: false, message: 'New password must be different from old password' })

    await User.findOne({ email: user.email })
        .then(async (user) => {
            if (!(await bcrypt.compare(password, user.password)))
                return res.json({ status: false, message: 'Password is incorrect' })

            await User.findByIdAndUpdate(user._id, { password: await bcrypt.hash(newPassword, 10) })
                .then(() => {
                    res.json({ status: true, message: 'Password changed' })
                })
                .catch((err) => {
                    res.json({ status: false, message: err.message })
                })
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

const userRole = async (req, res) => {
    const user = req.user
    const id = req.params.id

    let dispalyUser

    if (user.role === 'admin') {
        res.json({ role: user.role, isMe: true })
    } else if (user.role === 'student') {
        await Student.findById(id)
            .then((student) => {
                dispalyUser = student
            })
            .catch((err) => {
                res.json({ status: false, message: err.message })

            })
    } else {
        await Teacher.findById(id)
            .then((teacher) => {
                dispalyUser = teacher
            })
            .catch((err) => {
                res.json({ status: false, message: err.message })

            })
    }

    if (dispalyUser.email == user.email)
        res.json({ status: true, message: 'Allow' })
    else
        res.json({ status: false, message: 'Unauthorized' })

}


const isAuth = (req, res, next) => {
    const token = req.cookies.accessToken

    if (!token)
        return res.json({ status: false, message: 'Unauthorized' })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.json({ status: false, message: 'Forbidden'})
        req.user = user
        next()
    })
}

const isWho = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role))
            return res.json({ status: false, message: 'Forbidden' })
        next()
    }
}

const isMe = async (req, res, next) => {
    const id = req.params.id
    const user = req.user
    let dispalyUser

    if (user.role === 'admin') {
        return next()
    } else if (user.role === 'student') {
        await Student.findById(id)
            .then((student) => {
                dispalyUser = student
            })
            .catch((err) => {
                res.json({ status: false, message: err.message })
            })
    } else {
        await Teacher.findById(id)
            .then((teacher) => {
                dispalyUser = teacher
            })
            .catch((err) => {
                res.json({ status: false, message: err.message })
            })
    }

    if (dispalyUser.email !== user.email)
        return res.json({ status: false, message: 'Forbidden' })
    next()
}


module.exports = { UserLogin, UserLogout, UserResetPassword, userRole, isAuth, isWho, isMe }
