const Dishes = require('../models/dishes')
const Sellers = require('../models/sellers')

exports.getAll = async (req, res) => {
  try {
    const test_dish = await Dishes.findAll({ raw: true })

    return res.status(200).json(test_dish)
  } catch (err) {
    return res.status(500).json(err)
  }
}

exports.getOne = async (req, res) => {
  const { dishId } = req.params
  try {
    const dish = await Dishes.findOne({
      where: { id: dishId },
      include: [{ model: Sellers, as: 'seller' }],
    })
    return res.status(200).json(dish)
  } catch (err) {
    return res.status(500).json(err)
  }
}

exports.add = async (req, res) => {
  const { sellerId } = req.params
  console.log('sellerId', sellerId)
  try {
    const dish = await Dishes.create({ ...req.body, sellerId })
    return res.status(200).json(dish)
  } catch (err) {
    return res.status(500).json(err)
  }
}

exports.update = async (req, res) => {
  const { dishId, sellerId } = req.params
  const { name, category, image } = req.body

  try {
    const dish = await Dishes.findOne({ where: { id: dishId } })
    if (dish.sellerId != sellerId)
      return res.status(404).json({ message: 'Not a correct seller' })
    dish.name = name
    dish.category = category
    dish.image = image
    await dish.save()
    return res.json(dish)
  } catch (err) {
    return res.status(500).json(err)
  }
}

exports.remove = async (req, res) => {
  const { sellerId, dishId } = req.params

  try {
    const dish = await Dishes.findOne({ where: { id: dishId } })
    if (dish.sellerId != sellerId)
      return res.status(404).json({ message: 'Not a correct seller to delete' })
    await dish.destroy()
    return res.json(dish)
  } catch (err) {
    return res.status(500).json({ err })
  }
}
