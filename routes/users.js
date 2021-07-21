const router = require('express').Router()
const { add, update, remove } = require('../controllers/users')
const { authCheck } = require('../middleware/auth')

router.post('/signup', add)
router.put('/:id', authCheck, update)
router.delete('/:id', authCheck, remove)
module.exports = router
