const router = require("express").Router();
let Subject = require("../modles/subject");

const addSubject= async(req,res) => {
    const name = req.body.name;
    const code = req.body.code;
    const description = req.body.description;
    const yearOfStudy = req.body.yearOfStudy;
   

    const newSubject = {
        name,
        code,
        description,
        yearOfStudy,
    };

    await Subject.create(newSubject)
        .then((subject) => {
            res.status(200).json({ Success: `Subject ${subject.code} is Added` });
        })
        .catch((err) => {
            res.status(500).json({ Error: err.message });
        });

};

const viewAllSubject =async(req, res) => {

    await Subject.find()
        .then((subject) => {
            res.status(200).json(subject);
        })
        .catch((err) => {
            res.status(500).json({ Eror: err.message });
        });
};

const updateSubject = async (req, res) => {
    let subId = req.params.id;
    const { name, code,description,yearOfStudy } = req.body;

    const updateSubject = {
        name,
        code,
        description,
        yearOfStudy,
        
    }

    await Subject.findByIdAndUpdate(subId, updateSubject)
    .then((subject) => {
        if (subject)
            res.status(200).json({ Success: `Subject ${ subject.code } is updated!` })
        else
            res.status(404).json({ Eror: 'Subject Not Found!' })
        
    }).catch((err) => {
        res.status(500).json({ Eror: err.message });
    })

};

const removeSubject = async (req, res) => {
    let subId = req.params.id;

    await Subject.findByIdAndDelete(subId)
        .then(() => {
            if (subject)
                res.status(200).json({ Success: `Subject ${ subject.code } is deleted!` })
            else
                res.status(404).json({ Eror: 'Subject Not Found!' })
        })
        .catch((err) => {
            res.status(500).json({ Eror: err.message });
    })
};


const viewSubject = async (req, res) => {
    
    let subId = req.params.id;

    await Subject.findById(subId)
        .then((subject) => {
            if (response)
                res.status(200).json(subject)
            else
                res.status(404).json({ Eror: 'Subject Not Found!' })
        })
        .catch((err) => {
            res.status(500).json({ Eror: err.message })
        })
};

module.exports = {
    addSubject,
    viewAllSubject,
    updateSubject,
    removeSubject,
    viewSubject
};