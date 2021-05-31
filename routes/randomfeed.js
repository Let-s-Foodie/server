const router = require("express").Router();
const { getRandom, getDetail } = require("../controllers/randomfeed");
//GET /random/feeds
router.get("/feeds", getRandom);
//GET /random/detail
router.post("/detail", getDetail);
module.exports = router;
