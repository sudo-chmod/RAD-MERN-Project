const router = require("express").Router()
const funcs = require("../controllers/staffMemberControllers")
const { isAuth, isWho } = require('../controllers/authControllers')


router.route("/add").post(funcs.add_Staff)

router.route("/").get(funcs.display_Staff)

router.route("/:id").get(funcs.fetch_Staff)

router.route("/edit/:id").put(funcs.update_Staff)

router.route("/:id").delete(funcs.delete_Staff)


module.exports = router