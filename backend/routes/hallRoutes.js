const express = require('express')
const router = express.Router()
const { addHall, viewAllHalls, viewHall, updateHall, removeHall } = require('../controllers/hallControllers')
const { isAuth, isWho } = require('../controllers/authControllers')


router.post('/add', isAuth, isWho('admin'), addHall)
router.get('/', isAuth, viewAllHalls)
router.get('/:id', isAuth, viewHall)
router.delete('/edit/:id', isAuth, isWho('admin'), removeHall)
router.put('/edit/:id', isAuth, isWho('admin'), updateHall)


module.exports = router
