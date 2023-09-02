const express = require('express');
const router = express.Router();
const { addTeacher, updateTeacher, deleteTeacher, getTeacher, getAllTeachers } = require('../controllers/teacher');

router.post('/add', addTeacher)
router.put('/update/:id', updateTeacher)
router.delete('/delete/:id', deleteTeacher)
router.get('/get/:id', getTeacher)
router.get('/', getAllTeachers)



module.exports = router;
