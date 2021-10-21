const router = require("express").Router();
const { getAll, getDetail,getLocal } = require("../controllers/yelp");
//GET /random/feeds
router.post("/feeds", getAll);
//GET /random/detail
router.post("/detail", getDetail);
router.post("/local", getLocal);
module.exports = router;
