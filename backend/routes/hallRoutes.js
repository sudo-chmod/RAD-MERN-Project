const express = require('express')
const router = express.Router()
const { addHall, viewAllHalls, viewHall, updateHall, removeHall } = require('../controllers/hallControllers')
const { isAuth, isWho } = require('../controllers/authControllers')


router.post('/add', addHall)
router.get('/', viewAllHalls)
router.get('/:id',  viewHall)
router.delete('/:id', removeHall)
router.put('/edit/:id', updateHall)


module.exports = router
