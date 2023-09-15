const express = require("express");
const router = express.Router();
const { addStudent, viewAllStudents, viewStudent, updateStudent, deleteStudent } = require("../controllers/studentControllers");
const { isAuth, isWho, isMe } = require('../controllers/authControllers')

router.use(isAuth)

router.post("/add", isWho('admin'), addStudent);
router.get("/", viewAllStudents);
router.get("/:id", viewStudent);
router.put("/edit/:id", isWho('admin', 'student'), isMe, updateStudent);
router.delete("/:id", isWho('admin'),deleteStudent);


module.exports = router;