const router = require('express').Router()
const {
  getOne,
  getAll,
  getSellers,
  add,
  update,
  remove,
} = require('../controllers/sellers')

const { authCheck, adminCheck } = require('../middleware/auth')

// GET all sellers info associated with current user
router.get('/',getAll)

// GET seller info
router.get('/:sellerId', getOne)

// GET seller list associate with current user id
router.get('/user/:userId', authCheck, adminCheck, getSellers)

// CREATE seller info
router.post('/user', authCheck, adminCheck, add)

// UPDATE seller info
router.put('/:sellerId/user/:userId', authCheck, adminCheck, update)

// DELETE seller info
router.delete('/:sellerId/user/:userId', authCheck, adminCheck, remove)

module.exports = router
