const express = require("express");
const router = express.Router();

const {
    addStudent,
    viewAllStudents,
    viewStudent,
    updateStudent,
    deleteStudent
        } = require("../controllers/studentControllers");

router.post("/add", addStudent);
router.get("/", viewAllStudents);
router.get("/:id", viewStudent);
router.put("/edit/:id", updateStudent);
router.delete("/edit/:id", deleteStudent);

module.exports = router;