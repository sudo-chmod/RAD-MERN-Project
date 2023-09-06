const Student = require("../models/Student.js");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

const addStudent = async (req, res) => {
    const { firstName, lastName, yearOfStudy, address, mobile, NIC, gender, DOB, email, password } = req.body

    if (await User.findOne({ email })) {
        return res.status(400).json({ status: 'Email already exists' })
    }

    const temp = await Student.find({}).sort({ stdId: -1 }).limit(1)
    if (temp.length > 0) {
        stdId = temp[ 0 ].stdId + 1
    } else {
        stdId = 21000001
    }

    const newStudent = { stdId, firstName, lastName, yearOfStudy, address, mobile, NIC, gender, DOB, email }
    const newUser = { firstName, email, password: await bcrypt.hash(password, 10), role: "student" }

    await Student.create(newStudent) && await User.create(newUser)
        .then(() => {
            res.status(200).json({ status: 'New student is added' })
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })
}

const viewAllStudents = async (req, res) => {
    await Student.find({})
        .then((response) => {
            res.status(200).json(response)
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })
}

const viewStudent = async (req, res) => {
    const studentID = req.params.id;

    await Student.findById(studentID)
        .then((response) => {
            if (response) {
                res.status(200).json(response)
            } else {
                res.status(404).json({ status: 'Student not found' })
            }
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })
}

const updateStudent = async (req, res) => {
    const studentID = req.params.id;
    const { yearOfStudy, firstName, lastName, address, mobile, NIC, gender, DOB } = req.body

    await Student.findByIdAndUpdate({ _id: studentID }, { yearOfStudy, firstName, lastName, address, mobile, NIC, gender, DOB })
        .then(() => {
            res.status(200).json({ status: 'Student is updated' })
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })
}

const deleteStudent = async (req, res) => {
    const studentID = req.params.id;

    await Student.findByIdAndDelete({ _id: studentID })
        .then(async (response) => {
            if (response) {
                await User.findOneAndDelete({ email: response.email })
                    .then(() => {
                        res.status(200).json({ status: 'Student is deleted' })
                    }).catch((err) => {
                        res.status(500).json({ error: err.message })
                    })
            } else {
                res.status(404).json({ status: 'Student not found' })
            }
        }).catch((err) => {
            res.status(500).json({ error: err.message })
        })
}

module.exports = { addStudent, viewAllStudents, viewStudent, updateStudent, deleteStudent }