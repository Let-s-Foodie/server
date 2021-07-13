const router = require("express").Router();
const { add, update } = require("../controllers/users");
const { authCheck } = require("../middleware/auth");

//router.post("/", authCheck, adminCheck, add);
router.post("/signup", add);
router.put('/:id', authCheck, update)
module.exports = router;
