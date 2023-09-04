const user = require('../models/Teacher.js');
const bcrypt = require('bcrypt');

exports.addTeacher = async (req, res) => {
    const { tchId, firstName, lastName, mobile, address, qualifications, sex, email } = req.body;


    const newUser = new user({
        tchId,
        firstName,
        lastName,
        mobile,
        address,
        qualifications,
        sex,
        email
    });

    await newUser.save()
        .then(() => {
            res.json("Teacher Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with adding user", error: err.message });
        })
}

exports.getAllTeachers = async (req, res) => {
    await user.find().select('-password').lean()
    then((users) => {
        res.json(users);
    })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with users", error: err.message });
        })
}

exports.getTeacher = async (req, res) => {
    let userId = req.params.id;

    await user.findById(userId).select('-password').lean()
        .then((user) => {
            res.status(200).send({ status: "User fetched", user });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with get user", error: err.message });
        })
}

exports.updateTeacher = async (req, res) => {
    let userId = req.params.id;
    const { firstName, lastName, mobile, address, qualifications, sex } = req.body;
    const updateUser = {
        firstName,
        lastName,
        mobile,
        address,
        qualifications,
        sex
    }
    await user.findByIdAndUpdate(userId, updateUser)
        .then(() => {
            res.status(200).send({ status: "User updated" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating user", error: err.message });
        })
}

exports.deleteTeacher = async (req, res) => {
    let userId = req.params.id;
    await user.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "User deleted" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with delete user", error: err.message });
        })
}
