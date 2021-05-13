const express = require('express');
const router = express.Router();
const randomFeedController = require('../controllers/randomfeed');
//Get /random/feeds
router.get('/feeds',randomFeedController.getRandom);
//Get /random/detail
router.post('/detail',randomFeedController.getDetail)
module.exports = router;