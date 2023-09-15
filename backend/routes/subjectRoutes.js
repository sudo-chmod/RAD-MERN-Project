const router = require("express").Router();
const { addSubject, viewAllSubject, updateSubject, removeSubject, viewSubject, entrollSubject, unentrollSubject, isNotEnrolled, isEnrolled } = require("../controllers/subjectControllers")
const { isAuth, isWho } = require('../controllers/authControllers')


router.post("/add", addSubject);
router.get("/", viewAllSubject);
router.get("/:id", viewSubject);
router.put("/:id", entrollSubject);
router.patch("/:id", unentrollSubject);
router.put("/edit/:id", updateSubject);
router.delete("/:id", removeSubject);


module.exports = router;