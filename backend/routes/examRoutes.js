const express = require('express')
const router = express.Router()
const {
    addExam,
    viewAllExams,
    viewExam,
    updateExam,
    removeExam } = require('../controllers/examControllers.js')

router.post('/add', addExam)
router.get('/', viewAllExams)
router.get('/:id', viewExam)
router.delete('/:id', removeExam)
router.put('/:id', updateExam)

module.exports = router
