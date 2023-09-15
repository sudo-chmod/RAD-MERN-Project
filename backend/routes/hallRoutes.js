const express = require('express')
const router = express.Router()
const { addHall, viewAllHalls, viewHall, updateHall, removeHall } = require('../controllers/hallControllers')
const { isAuth, isWho } = require('../controllers/authControllers')

router.use(isAuth)

router.post('/add', isWho('admin'), addHall)
router.get('/', viewAllHalls)
router.get('/:id',  viewHall)
router.delete('/:id', isWho('admin'), removeHall)
router.put('/edit/:id', isWho('admin') ,updateHall)


module.exports = router
