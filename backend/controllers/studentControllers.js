const Student = require("../models/Student.js");
const bcrypt = require("bcrypt");

const addStudent = async (req, res) => {

    const {
        stdId,
        yearOfStudy,
        firstName,
        lastName,
        address,
        mobile,
        NIC,
        gender,
        DOB,
        email
    } = req.body

    await Student.create({
        stdId,
        yearOfStudy,
        firstName,
        lastName,
        address,
        mobile,
        NIC,
        gender,
        DOB,
        email
    })
        .then((response) => {
            res.status(200).json({ status: `Student ${ response.stdId } is added` })
        }).catch((err) => {
            res.status(500).json({ status: err.message })
        })
}

const viewAllStudents = async (req, res) => {

    await Student.find({})
        .then((response) => {
            res.status(200).json({ status: response })
        }).catch((err) => {
            res.status(500).json({ status: err.message })
        })
}

const viewStudent = async (req, res) => {

    const studentID = req.params.id;

    await Student.findById(studentID)
        .then((response) => {
            if (response) res.status(200).json({ status: response })
            else res.status(404).json({ status: "Student not found" })
        }).catch((err) => {
            res.status(500).json({ status: err.message })
        })
}

const updateStudent = async (req, res) => {

    const studentID = req.params.id;

    const {
        yearOfStudy,
        firstName,
        lastName,
        address,
        mobile,
        NIC,
        gender,
        DOB
    } = req.body

    await Student.findByIdAndUpdate({ _id: studentID },
        {
            yearOfStudy,
            firstName,
            lastName,
            address,
            mobile,
            NIC,
            gender,
            DOB
        })
        .then((response) => {
            if (response) res.status(200).json({ status: `Student ${ response.stdId } is updated` })
            else res.status(404).json({ status: "Student not found" })
        }).catch((err) => {
            res.status(500).json({ status: err.message })
        })
}

const deleteStudent = async (req, res) => {

    const studentID = req.params.id;

    await Student.findByIdAndDelete({ _id: studentID })
        .then((response) => {
            if (response) res.status(200).json({ status: `Student ${ response.stdId } is deleted` })
            else res.status(404).json({ status: "Student not found" })
        }).catch((err) => {
            res.status(500).json({ status: err.message })
        })
}

module.exports = {
    addStudent,
    viewAllStudents,
    viewStudent,
    updateStudent,
    deleteStudent
}