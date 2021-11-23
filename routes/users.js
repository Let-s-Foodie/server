const router = require('express').Router()
const { add, update, remove, signin } = require('../controllers/users')
const { authCheck, adminCheck } = require('../middleware/auth')

router.post('/signup', add)
router.put('/:id', authCheck, update)
router.delete('/:id', authCheck, remove)
router.post('/signin', adminCheck, signin)
module.exports = router
