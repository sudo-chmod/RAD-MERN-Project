const express = require('express');
const router = express.Router();
const { addTeacher, updateTeacher, deleteTeacher, getTeacher, getAllTeachers } = require('../controllers/teacherControllers');
const { isAuth, isWho } = require('../controllers/authControllers');


router.post('/add', isAuth, isWho('admin'), addTeacher)
router.get('/', isAuth, getAllTeachers)
router.get('/:id', isAuth, getTeacher)
router.put('/edit/:id', isAuth, isWho('admin', 'teacher'), updateTeacher)
router.delete('/edit/:id', isAuth, isWho('admin'), deleteTeacher)


module.exports = router;
