const user = require('../models/Teacher.js');

exports.addTeacher = async (req, res) => {
    const {fname,lname,phoneNumber,address,email,Subjects,Qulifications,sex,School, password} = req.body;
    const newUser = new user({
        fname,
        lname,
        phoneNumber,
        address,
        email,
        Subjects,
        Qulifications,
        sex,
        School,
        password
    });

    newUser.save().then(()=>{
        res.json("Teacher Added");
    }).catch((err)=>{
        console.log(err);
    })
}

exports.getAllTeachers = async (req, res) => {
    user.find().then((users)=>{
        res.json(users);
    }).catch((err)=>{
        console.log(err);
    })
}

exports.getTeacher = async (req, res) => {
    let userId = req.params.id;
    user.findById(userId).then((user)=>{
        res.status(200).send({status: "User fetched", user});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
}

exports.updateTeacher = async (req, res) => {
    let userId = req.params.id;
    const {fname,lname,phoneNumber,address,email,Subjects,Qulifications,sex,School, password} = req.body;
    const updateTeacher = {
        fname,
        lname,
        phoneNumber,
        address,
        email,
        Subjects,
        Qulifications,
        sex,
        School,
        password
    }
    const update = await user.findByIdAndUpdate(userId, updateTeacher)
    user.findByIdAndUpdate(userId, req.body).then(()=>{
        res.status(200).send({status: "User updated"});
    }   
    ).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating user", error: err.message});
    })  
}

exports.deleteTeacher = async (req, res) => {
    let userId = req.params.id;
    user.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
}