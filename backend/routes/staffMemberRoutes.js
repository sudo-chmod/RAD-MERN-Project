const router = require("express").Router()
const funcs = require("../controllers/staffMemberControllers")
const { isAuth, isWho } = require('../controllers/authControllers')


router.route("/add").post(isAuth, isWho('admin'), funcs.add_staff_member)

router.route("/").get(isAuth, funcs.display_staff_member)

router.route("/:id").get(isAuth, funcs.fetch_staff_member)

router.route("/edit/:id").put(isAuth, isWho('admin'), funcs.update_staff_member)

router.route("/edit/:id").delete(isAuth, isWho('admin'), funcs.delete_staff_member)


module.exports = router