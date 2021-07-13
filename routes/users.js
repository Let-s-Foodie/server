const router = require("express").Router();
const { add, update } = require("../controllers/users");
const { authCheck, adminCheck } = require("../middleware/auth");

//router.post("/", authCheck, adminCheck, add);
router.post("/signup", add);
router.put('/:id', update)
module.exports = router;
