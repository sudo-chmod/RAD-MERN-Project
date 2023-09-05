const router = require("express").Router();
let Subject = require("../models/Subject");

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

module.exports = { addSubject, viewAllSubject, updateSubject, removeSubject, viewSubject };