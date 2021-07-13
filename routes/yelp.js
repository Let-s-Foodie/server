const router = require("express").Router();
const { getRandom, getDetail,getLocal } = require("../controllers/yelp");
//GET /random/feeds
router.get("/feeds", getRandom);
//GET /random/detail
router.post("/detail", getDetail);
router.post("/local", getLocal);
module.exports = router;
