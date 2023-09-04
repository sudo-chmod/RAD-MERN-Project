const express = require('express');
const router = express.Router();
const { addTeacher, updateTeacher, deleteTeacher, getTeacher, getAllTeachers } = require('../controllers/teacherController');

router.post('/add', addTeacher)
router.get('/', getAllTeachers)
router.get('/:id', getTeacher)
router.put('/edit/:id', updateTeacher)
router.delete('/edit/:id', deleteTeacher)

module.exports = router;
