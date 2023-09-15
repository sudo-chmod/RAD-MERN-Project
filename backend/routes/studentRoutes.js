const express = require("express");
const router = express.Router();
const { addStudent, viewAllStudents, viewStudent, updateStudent, deleteStudent } = require("../controllers/studentControllers");
const { isAuth, isWho, isMe } = require('../controllers/authControllers')


router.post("/add", addStudent);
router.get("/", viewAllStudents);
router.get("/:id", viewStudent);
router.put("/edit/:id",updateStudent);
router.delete("/:id", deleteStudent);


module.exports = router;