const Dishes = require('../models/dishes')
const Sellers = require('../models/sellers')

exports.getAll = async (req, res) => {
  try {
    const sellers = await Sellers.findAll()
    return res.status(200).json(sellers)
  } catch (err) {
    console.log('FAILED: get all sellers')
    res.status(500).json(err)
  }
}

exports.getOne = async (req, res) => {
  const { sellerId } = req.params
  try {
    const seller = await Sellers.findOne({
      where: { id: sellerId },
    })
    return res.status(200).json(seller)
  } catch (err) {
    return res.status(500).json(err)
  }
}

exports.getSellers = async (req, res) => {
  console.log('_________________', req.params.id)
  const { userId } = req.params
  try {
    const sellers = await Sellers.findAll({
      where: {
        userId,
      },
    })
    console.log('SUCCESS: finding all sellers')
    return res.status(200).json(sellers)
  } catch (err) {
    console.log('FAILED: finding all sellers')
    return res.status(500).json(err)
  }
}

exports.add = async (req, res) => {
  const { userId } = req
  try {
    const seller = await Sellers.create({ ...req.body, userId })
    console.log('SUCCESS: adding new seller')
    return res.status(200).json(seller)
  } catch (err) {
    console.log('FAILED: adding new seller')
    return res.status(500).json(err)
  }
}

exports.update = async (req, res) => {
  const { sellerId, userId } = req.params
  console.log(req.params)
  const {
    name,
    lat,
    lng,
    instagram,
    facebook,
    yelp,
    homepage,
    youtube,
  } = req.body

  const seller = await Sellers.findOne({ where: { id: sellerId } })

  if (!seller)
    return res.status(404).json({ message: 'Cannot find seller info' })
  if (seller.dataValues.userId.toString() !== userId) return res.sendStatus(403)

  seller.name = name
  seller.lat = lat
  seller.lng = lng
  seller.instagram = instagram
  seller.facebook = facebook
  seller.yelp = yelp
  seller.homepage = homepage
  seller.youtube = youtube
  await seller.save()

  console.log('SUCCESS: updating seller information')
  return res.status(200).json(seller)
}

exports.remove = async (req, res) => {
  const { sellerId } = req.params
  try {
    const seller = await Sellers.findOne({ where: { id: sellerId } })
    await seller.destroy()
    console.log('SUCCESS: delete seller information')
    return res.json(seller)
  } catch (err) {
    console.log('FAILED: delete seller information')
    return res.status(500).json({ err })
  }
}
