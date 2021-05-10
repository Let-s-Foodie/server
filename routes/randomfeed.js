const express = require('express');
const router = express.Router();
const randomFeedController = require('../controllers/randomfeed');
//Get /random/feeds
router.get('/feeds',randomFeedController.getRandom);

module.exports = router;