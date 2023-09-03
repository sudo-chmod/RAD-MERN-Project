const router = require("express").Router()

let staff_member = require("../models/StaffMember")


const funcs  = require("../controllers/staffMemberControllers")

router.route("/add").post(funcs.add_staff_member)

router.route("/").get(funcs.display_staff_member)

router.route("/:Id").put(funcs.update_staff_member)

router.route("/:Id").delete(funcs.delete_staff_member)
 
router.route("/:Id").get(funcs.fetch_staff_member)


module.exports = router