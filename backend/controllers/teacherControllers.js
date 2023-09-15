const { response } = require('express');
const Teacher = require('../models/Teacher.js');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

const addTeacher = async (req, res) => {
    const { firstName, lastName, mobile, address, qualifications, sex, email, password, NIC } = req.body;

    if (await User.findOne({ email })) {
        return res.json({ status: false, message: 'Email already exists' })
    }

    const temp = await Teacher.find({}).sort({ tchId: -1 }).limit(1)
    if (temp.length > 0) {
        tchId = temp[ 0 ].tchId + 1
    } else {
        tchId = 2101
    }

    const newTeacher = { tchId, firstName, lastName, mobile, address, NIC, qualifications, sex, email }
    const newUser = { firstName, email, password: await bcrypt.hash(password, 10), role: 'teacher' }

    await Teacher.create(newTeacher) && await User.create(newUser)
        .then(() => {
            res.json({ status: true, message: 'New teacher is added' });
        }).catch((err) => {
            res.json({ status: false, message: err.message })
        })
}

const getAllTeachers = async (req, res) => {
    await Teacher.find()
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })
        })
}

const getTeacher = async (req, res) => {
    let userId = req.params.id;

    await Teacher.findById(userId)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })
        })
}

const updateTeacher = async (req, res) => {
    let userId = req.params.id;
    const { firstName, lastName, mobile, address, qualifications, sex, NIC } = req.body;
    const updateUser = { firstName, lastName, mobile, address, qualifications, sex, NIC }

    await Teacher.findByIdAndUpdate(userId, updateUser)
        .then(() => {
            res.json({ status: true, message: 'Teacher is updated' });
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })
        })
}

const deleteTeacher = async (req, res) => {
    let userId = req.params.id;

    await Teacher.findByIdAndDelete(userId)
        .then(async (response) => {
            if (response) {
                await User.findOneAndDelete({ email: response.email })
                    .then(() => {
                        res.json({ status: true, message: 'Teacher is deleted' })
                    }).catch((err) => {
                        res.json({ status: false, message: err.message })
                    })
            } else {
                res.json({ status: false, message: 'Teacher not found' })
            }
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })
        })
}

module.exports = { addTeacher, updateTeacher, deleteTeacher, getTeacher, getAllTeachers }
