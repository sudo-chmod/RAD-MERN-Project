const User = require('../models/User.js');
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
        process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })

    res.status(200).json({ status: 'Login success', accessToken })
}

const isAuth = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader)
        return res.status(400).json({ status: 'Unauthorized' })

    const accessToken = authHeader.split(' ')[ 1 ]

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
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

module.exports = { UserLogin, isAuth, isWho }
