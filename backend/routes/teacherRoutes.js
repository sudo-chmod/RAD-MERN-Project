const express = require('express');
const router = express.Router();
const { addTeacher, updateTeacher, deleteTeacher, getTeacher, getAllTeachers } = require('../controllers/teacherControllers');
const { isAuth, isWho, isMe } = require('../controllers/authControllers');

router.use(isAuth)

router.post('/add', isWho('admin'), addTeacher)
router.get('/', getAllTeachers)
router.get('/:id', getTeacher)
router.put('/edit/:id', isWho('admin','teacher'), isMe, updateTeacher)
router.delete('/:id', isWho('admin') , deleteTeacher)


module.exports = router;
