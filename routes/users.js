const router = require("express").Router();
const { add } = require("../controllers/users");
const { authCheck, adminCheck } = require("../middleware/auth");

//router.post("/", authCheck, adminCheck, add);
router.post("/", add);
module.exports = router;
