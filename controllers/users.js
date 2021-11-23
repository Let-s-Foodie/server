const Users = require('../models/users')

exports.add = async (req, res) => {
  const { email, role } = req.body
  const checkUser = await Users.findOne({ where: { email } })

  if (checkUser) {
    return res.status(401).json({ message: 'Email already in used' })
  }

  try {
    const user = await Users.create({ email, role })
    return res.status(200).json(user)
  } catch (err) {
    return res.status(500).json(err)
  }
}

exports.update = async (req, res) => {
  const { id } = req.params
  const { role } = req.body
  console.log()
  try {
    const user = await Users.findOne({ where: { id } })
    user.role = role
    await user.save()
    return res.status(200).json(user)
  } catch (err) {
    return res.status(500).json(err)
  }
}

exports.remove = async (req, res) => {
  const { id } = req.params

  const user = await Users.findOne({ where: { id } })

  if (!user) return res.status(404).json({ message: 'Cannot find user info' })
  if (user.dataValues.email !== req.firebaseUser.email)
    return res.sendStatus(403)
  await user.destroy()
  return res.status(200).json(user)
}
exports.signin = async (req, res) => {
  const data = req.body

  return res.status(200).json({
    data: data.data,
    role: 'seller',
  })
}
