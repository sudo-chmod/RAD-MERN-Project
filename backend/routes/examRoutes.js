const express = require('express')
const router = express.Router()
const { addExam, viewAllExams, viewExam, updateExam, removeExam } = require('../controllers/examControllers')
const { isAuth, isWho } = require('../controllers/authControllers')

router.use(isAuth)

router.post('/add', isWho('admin', 'teacher'), addExam)
router.get('/', viewAllExams)
router.get('/:id', viewExam)
router.delete('/:id', isWho('admin', 'teacher'), removeExam)
router.put('/edit/:id', isWho('admin', 'teacher'), updateExam)


module.exports = router
