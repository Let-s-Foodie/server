const admin = require('../firebase/firebase.js')
const Users = require('../models/users')

exports.authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken)
    // console.log('FIREBASE USER IN AUTHCHECK', firebaseUser)
    req.firebaseUser = firebaseUser
    next()
  } catch (err) {
    res.status(401).json({ err: 'Invalid or expired token' })
  }
}

exports.adminCheck = async (req, res, next) => {
  const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken)
  console.log('FIREBASEUSER: ', firebaseUser)
  const { email } = firebaseUser
  const adminUser = await Users.findOne({ where: { email } })
  console.log('ADMIN USER: ', adminUser)
  if (adminUser.role !== 'seller') {
    return res.status(403).json({
      err: 'Admin resource. Access denied.',
      userId: adminUser.dataValues.id,
      authtoken: req.headers.authtoken,
      role: 'user',
    })
  } else {
    req.userId = adminUser.dataValues.id
    req.params.id = adminUser.dataValues.id
    console.log('@@@@@', req.userId)
    next()
  }
}
