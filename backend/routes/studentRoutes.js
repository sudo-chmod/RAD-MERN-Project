const express = require("express");
const router = express.Router();
const { addStudent, viewAllStudents, viewStudent, updateStudent, deleteStudent } = require("../controllers/studentControllers");
const { isAuth, isWho } = require('../controllers/authControllers')


router.post("/add", isAuth, isWho('admin', 'teacher'), addStudent);
router.get("/", isAuth, viewAllStudents);
router.get("/:id", isAuth, viewStudent);
router.put("/edit/:id", isAuth, isWho('admin', 'student'), updateStudent);
router.delete("/edit/:id", isAuth, isWho('admin', 'teacher'), deleteStudent);


module.exports = router;