const express = require('express')
const router = express.Router()
const { addExam, viewAllExams, viewExam, updateExam, removeExam } = require('../controllers/examControllers')
const { isAuth, isWho } = require('../controllers/authControllers')


router.post('/add', isAuth, isWho('admin', 'teacher'), addExam)
router.get('/', viewAllExams)
router.get('/:id', viewExam)
router.delete('/:id', isAuth, isWho('admin', 'teacher'), removeExam)
router.put('/:id', isAuth, isWho('admin', 'teacher'), updateExam)


module.exports = router
