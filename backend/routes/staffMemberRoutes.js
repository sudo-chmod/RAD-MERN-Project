const router = require("express").Router()
const funcs = require("../controllers/staffMemberControllers")
const { isAuth, isWho } = require('../controllers/authControllers')


router.route("/add").post(funcs.add_staff_member)

router.route("/").get(funcs.display_staff_member)

router.route("/:id").get(funcs.fetch_staff_member)

router.route("/edit/:id").put(funcs.update_staff_member)

router.route("/:id").delete(funcs.delete_staff_member)


module.exports = router