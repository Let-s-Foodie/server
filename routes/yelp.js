const router = require('express').Router()
const { getAll, getDetail, getLocal } = require('../controllers/yelp')

//GET /yelp/dishes
router.post('/dishes', getAll)

//GET /yelp/detail
router.post('/detail', getDetail)
router.post('/local', getLocal)
module.exports = router
