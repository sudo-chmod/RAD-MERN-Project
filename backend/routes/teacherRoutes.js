const express = require('express');
const router = express.Router();
const { addTeacher, updateTeacher, deleteTeacher, getTeacher, getAllTeachers } = require('../controllers/teacherControllers');
const { isAuth, isWho, isMe } = require('../controllers/authControllers');

router.post('/add', addTeacher)
router.get('/', getAllTeachers)
router.get('/:id', getTeacher)
router.put('/edit/:id', updateTeacher)
router.delete('/:id', deleteTeacher)


module.exports = router;
