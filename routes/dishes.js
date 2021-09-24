const router = require('express').Router()
const { getAll, getOne, add, update, remove } = require('../controllers/dishes')

const { authCheck, adminCheck } = require('../middleware/auth')

// GET all dishes
router.get('/', getAll)

// GET dish
router.get('/:dishId', authCheck, adminCheck, getOne)

// CREATE dishes
router.post('/seller/:sellerId', authCheck, adminCheck, add)

// UPDATE dishes
router.put('/:dishId/seller/:sellerId', authCheck, adminCheck, update)

// DELETE dishes
router.delete('/:dishId/seller/:sellerId', authCheck, adminCheck, remove)

module.exports = router
