const Teacher = require('../models/Teacher.js');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

exports.addTeacher = async (req, res) => {
    const { firstName, lastName, mobile, address, qualifications, sex, email, password, NIC } = req.body;

    if (await User.findOne({ email })) {
        return res.status(400).json({ status: 'Email already exists' })
    }

    const temp = await Teacher.find({}).sort({ tchId: -1 }).limit(1)
    if (temp.length > 0) {
        tchId = temp[ 0 ].tchId + 1
    } else {
        tchId = 2101
    }

    const newTeacher = { tchId, firstName, lastName, mobile, address, NIC, qualifications, sex, email }
    const newUser = { email, password: await bcrypt.hash(password, 10), role: 'teacher' }

    await Teacher.create(newTeacher) && await User.create(newUser)
        .then(() => {
            res.json('Teacher Added');
        }).catch((err) => {
            res.status(500).send({ status: 'Error with adding Teacher', error: err.message });
        })
}

exports.getAllTeachers = async (req, res) => {
    await Teacher.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(500).send({ status: 'Error with users', error: err.message });
        })
}

exports.getTeacher = async (req, res) => {
    let userId = req.params.id;

    await Teacher.findById(userId)
        .then((Teacher) => {
            res.status(200).send({ status: 'User fetched', Teacher });
        })
        .catch((err) => {
            res.status(500).send({ status: 'Error with get Teacher', error: err.message });
        })
}

exports.updateTeacher = async (req, res) => {
    let userId = req.params.id;
    const { firstName, lastName, mobile, address, qualifications, sex, NIC } = req.body;

    if (await User.findOne({ email })) {
        return res.status(400).json({ status: 'Email already exists' })
    }

    const updateUser = { firstName, lastName, mobile, address, qualifications, sex, NIC }

    await Teacher.findByIdAndUpdate(userId, updateUser)
        .then(() => {
            res.status(200).send({ status: 'User updated' });
        })
        .catch((err) => {
            res.status(500).send({ status: 'Error with updating Teacher', error: err.message });
        })
}

exports.deleteTeacher = async (req, res) => {
    let userId = req.params.id;
    await Teacher.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: 'User deleted' });
        })
        .catch((err) => {
            res.status(500).send({ status: 'Error with delete Teacher', error: err.message });
        })
}
