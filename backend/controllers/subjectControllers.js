const router = require("express").Router();
const Student = require("../models/Student");
let Subject = require("../models/Subject");
const User = require("../models/User");

const addSubject = async (req, res) => {
    const code = req.body.code;
    const title = req.body.title;
    const description = req.body.description;
    const yearOfStudy = req.body.yearOfStudy;
    const newSubject = { code, title, description, yearOfStudy };

    await Subject.create(newSubject)
        .then(() => {
            res.status(200).json({ status: 'New subject is added!' });
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message });
        });

};

const viewAllSubject = async (req, res) => {
    await Subject.find()
        .then((subject) => {
            res.status(200).json(subject);
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message });
        });
};

const updateSubject = async (req, res) => {
    let subId = req.params.id;
    const { code, title, description, yearOfStudy } = req.body;
    const updateSubject = { code, title, description, yearOfStudy }

    await Subject.findByIdAndUpdate(subId, updateSubject)
        .then((subject) => {
            if (subject)
                res.status(200).json({ status: 'Subject is updated' })
            else
                res.status(404).json({ status: 'Subject not found' })
        }).catch((err) => {
            res.status(500).json({ eror: err.message });
        })

};

const removeSubject = async (req, res) => {
    let subId = req.params.id;

    await Subject.findByIdAndDelete(subId)
        .then((subject) => {
            if (subject)
                res.status(200).json({ status: 'Subject is deleted' })
            else
                res.status(404).json({ status: 'Subject not found' })
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message });
        })
};


const viewSubject = async (req, res) => {
    let subId = req.params.id;

    await Subject.findById(subId)
        .then((subject) => {
            if (subject)
                res.status(200).json(subject)
            else
                res.status(404).json({ status: 'Subject not found' })
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message })
        })
};

const entrollSubject = async (req, res) => {
    let subId = req.params.id;
    let user = req.user;

    await Subject.findById(subId)
        .then(async (subject) => {
            if (subject)
                await Student.findOneAndUpdate({ email: user.email }, { $push: { subjects: subject.code } })
                    .then((student) => {
                        res.status(200).json({ status: `Subject is entrolled by ${ student.firstName }` })
                    })
                    .catch((err) => {
                        res.status(500).json({ eror: err.message })
                    })
            else
                res.status(404).json({ status: 'Subject not found' })
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message })
        })
};

const unentrollSubject = async (req, res) => {
    let subId = req.params.id;
    let user = req.user;

    await Subject.findById(subId)
        .then(async (subject) => {
            if (subject)
                await Student.findOneAndUpdate({ email: user.email }, { $pull: { subjects: subject.code } })
                    .then((student) => {
                        res.status(200).json({ status: `Subject is unentrolled by ${ student.firstName }` })
                    })
                    .catch((err) => {
                        res.status(500).json({ eror: err.message })
                    })
            else
                res.status(404).json({ status: 'Subject not found' })
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message })
        })
};

const isEnrolled = async (req, res, next) => {
    let subId = req.params.id;
    let user = req.user;

    await Subject.findById(subId)
        .then(async (subject) => {
            if (subject)
                await Student.findOne({ email: user.email })
                    .then((student) => {
                        if (!(student.subjects.includes(subject.code)))
                            return res.status(400).json({ status: 'Student not entrolled' })
                        next()
                    })
                    .catch((err) => {
                        res.status(500).json({ eror: err.message })
                    })
            else
                res.status(404).json({ status: 'Subject not found' })
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message })
        })
};

const isNotEnrolled = async (req, res, next) => {
    let subId = req.params.id;
    let user = req.user;

    await Subject.findById(subId)
        .then(async (subject) => {
            if (subject)
                await Student.findOne({ email: user.email })
                    .then((student) => {
                        if ((student.subjects.includes(subject.code)))
                            return res.status(400).json({ status: 'Student is already entrolled' })
                        next()
                    })
                    .catch((err) => {
                        res.status(500).json({ eror: err.message })
                    })
            else
                res.status(404).json({ status: 'Subject not found' })
        })
        .catch((err) => {
            res.status(500).json({ eror: err.message })
        })
};



module.exports = { addSubject, viewAllSubject, updateSubject, removeSubject, viewSubject, entrollSubject, unentrollSubject, isEnrolled, isNotEnrolled };