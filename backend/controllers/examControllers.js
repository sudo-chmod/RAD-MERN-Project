const Exam = require(`../models/Exam`)

const addExam = async (req, res) => {
    const { title, type, subject, yearOfStudy, date, startTime, endTime, location } = req.body

    await Exam.create({ title, type, subject, yearOfStudy, date, startTime, endTime, location })
        .then((response) => {
            res.json({ status: true, message: 'New exam is added' })
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

const viewAllExams = async (req, res) => {
    await Exam.find({})
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })
        })
}

const viewExam = async (req, res) => {
    const examId = req.params.id;

    await Exam.findById(examId)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

const updateExam = async (req, res) => {
    const examId = req.params.id;
    const { title, type, subject, yearOfStudy, date, startTime, endTime, location } = req.body

    await Exam.findOneAndUpdate({ _id: examId }, { title, type, subject, yearOfStudy, date, startTime, endTime, location })
        .then((response) => {
            if (response)
                res.json({ status: true, message: 'Exam is updated' })
            else
                res.json({ status: false, message: 'Exam not found' })
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

const removeExam = async (req, res) => {
    const examId = req.params.id;

    await Exam.findByIdAndDelete({ _id: examId })
        .then((response) => {
            if (response)
                res.json({ status: true, message: 'Exam is deleted' })
            else
                res.json({ status: false, message: 'Exam not found' })
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

module.exports = { addExam, viewAllExams, viewExam, updateExam, removeExam }