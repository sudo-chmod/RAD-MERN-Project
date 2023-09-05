const Exam = require(`../models/Exam`)

const addExam = async (req, res) => {
    const { title, type, subject, yearOfStudy, date, startTime, endTime, location } = req.body

    await Exam.create({ title, type, subject, yearOfStudy, date, startTime, endTime, location })
        .then((response) => {
            res.status(200).json({ status: 'New exam is added' })
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message })
        })
}

const viewAllExams = async (req, res) => {
    await Exam.find({})
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message })
        })
}

const viewExam = async (req, res) => {
    const examId = req.params.id;

    await Exam.findById(examId)
        .then((response) => {
            if (response)
                res.status(200).json(response)
            else
                res.status(404).json({ status: 'Exam not found' })
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message })
        })
}

const updateExam = async (req, res) => {
    const examId = req.params.id;
    const { title, type, subject, yearOfStudy, date, startTime, endTime, location } = req.body

    await Exam.findOneAndUpdate({ _id: examId }, { title, type, subject, yearOfStudy, date, startTime, endTime, location })
        .then((response) => {
            if (response)
                res.status(200).json({ status: 'Exam is updated' })
            else
                res.status(404).json({ status: 'Exam not found' })
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message })
        })
}

const removeExam = async (req, res) => {
    const examId = req.params.id;

    await Exam.findByIdAndDelete({ _id: examId })
        .then((response) => {
            if (response)
                res.status(200).json({ status: 'Exam is deleted' })
            else
                res.status(404).json({ Eror: 'Exam not found' })
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message })
        })
}

module.exports = { addExam, viewAllExams, viewExam, updateExam, removeExam }