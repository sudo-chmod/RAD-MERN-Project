const router = require("express").Router();
const { addSubject, viewAllSubject, updateSubject, removeSubject, viewSubject } = require("../controllers/subjectControllers")
const { isAuth, isWho } = require('../controllers/authControllers')


router.post("/add", isAuth, isWho('admin'), addSubject);
router.get("/", isAuth, viewAllSubject);
router.get("/:id", isAuth, viewSubject);
router.put("/edit/:id", isAuth, isWho('admin'), updateSubject);
router.delete("/edit/:id", isAuth, isWho('admin'), removeSubject);


module.exports = router;