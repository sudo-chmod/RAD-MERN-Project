const router = require("express").Router();
const {
    addSubject,
    viewAllSubject,
    updateSubject,
    removeSubject,
    viewSubject
} = require("../controllers/subjectControllers")

router.post("/add", addSubject);
router.get("/", viewAllSubject);
router.put("/edit/:id", updateSubject);
router.delete("/edit/:id", removeSubject);
router.get("/:id", viewSubject);

module.exports = router;