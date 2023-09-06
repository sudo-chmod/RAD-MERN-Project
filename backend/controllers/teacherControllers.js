const Teacher = require('../models/Teacher.js');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

const addTeacher = async (req, res) => {
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
    const newUser = { firstName, email, password: await bcrypt.hash(password, 10), role: 'teacher' }

    await Teacher.create(newTeacher) && await User.create(newUser)
        .then(() => {
            res.status(200).send({ status: 'New teacher is added' });
        }).catch((err) => {
            res.status(500).send({ error: err.message });
        })
}

const getAllTeachers = async (req, res) => {
    await Teacher.find()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((err) => {
            res.status(500).send({ error: err.message });
        })
}

const getTeacher = async (req, res) => {
    let userId = req.params.id;

    await Teacher.findById(userId)
        .then((Teacher) => {
            res.status(200).send(Teacher);
        })
        .catch((err) => {
            res.status(500).send({ error: err.message });
        })
}

const updateTeacher = async (req, res) => {
    let userId = req.params.id;
    const { firstName, lastName, mobile, address, qualifications, sex, NIC } = req.body;
    const updateUser = { firstName, lastName, mobile, address, qualifications, sex, NIC }

    await Teacher.findByIdAndUpdate(userId, updateUser)
        .then(() => {
            res.status(200).send({ status: 'Teacher is updated' });
        })
        .catch((err) => {
            res.status(500).send({ error: err.message });
        })
}

const deleteTeacher = async (req, res) => {
    let userId = req.params.id;

    await Teacher.findByIdAndDelete(userId)
        .then(async (response) => {
            if (response) {
                await User.findOneAndDelete({ email: response.email })
                    .then(() => {
                        res.status(200).json({ status: 'Teacher is deleted' })
                    }).catch((err) => {
                        res.status(500).json({ status: err.message })
                    })
            } else {
                res.status(404).json({ status: 'Teacher not found' })
            }
        })
        .catch((err) => {
            res.status(500).send({ error: err.message });
        })
}

module.exports = { addTeacher, updateTeacher, deleteTeacher, getTeacher, getAllTeachers }
