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
            res.json({ status: true, message: 'New student is added' })
        }).catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

const viewAllStudents = async (req, res) => {
    await Student.find({})
        .then((response) => {
            res.json(response)
        }).catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

const viewStudent = async (req, res) => {
    const studentID = req.params.id;

    await Student.findById(studentID)
        .then((response) => {
            res.json(response)
        }).catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

const updateStudent = async (req, res) => {
    const studentID = req.params.id;
    const { yearOfStudy, firstName, lastName, address, mobile, NIC, gender, DOB } = req.body

    await Student.findByIdAndUpdate({ _id: studentID }, { yearOfStudy, firstName, lastName, address, mobile, NIC, gender, DOB })
        .then(() => {
            res.json({ status: true, message: 'Student is updated' })
        }).catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

const deleteStudent = async (req, res) => {
    const studentID = req.params.id;

    await Student.findByIdAndDelete({ _id: studentID })
        .then(async (response) => {
            if (response) {
                await User.findOneAndDelete({ email: response.email })
                    .then(() => {
                        res.json({ status: true, message: 'Student is deleted' })
                    }).catch((err) => {
                        res.json({ status: false, message: err.message })

                    })
            } else {
                res.json({ status: false, message: 'Student not found' })
            }
        }).catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

module.exports = { addStudent, viewAllStudents, viewStudent, updateStudent, deleteStudent }