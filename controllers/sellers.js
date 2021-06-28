const { Dishes, Sellers, Users } = require("../models");

exports.getAll = async (req, res) => {
  const { uid } = req.user;
  try {
    const sellers = await Sellers.findAll({
      where: {
        userId: uid,
      },
      // include: [{ model: Users, as: "user" }],
    });
    return res.status(200).json(sellers);
  } catch (err) {
    console.log("FAILED: get all sellers");
    res.status(500).json(err);
  }
};

exports.getOne = async (req, res) => {
  const { sellerId } = req.params;
  try {
    const seller = await Sellers.findOne({
      where: { id: sellerId },
      include: [{ model: Dishes }],
    });
    return res.status(200).json(seller);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.add = async (req, res) => {
  const { uid } = req.user;
  try {
    const seller = Sellers.create({ ...req.body, userId: uid });
    console.log("SUCCESS: adding new seller");
    return res.status(200).json(seller);
  } catch (err) {
    console.log("FAILED: adding new seller");
    return res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  const { sellerId } = req.params;
  const { name, lat, lng, instagram, facebook, yelp, homepage, youtube } =
    req.body;
  try {
    const seller = await Sellers.findOne({ where: { id: sellerId } });
    seller.name = name;
    seller.lat = lat;
    seller.lng = lng;
    seller.instagram = instagram;
    seller.facebook = facebook;
    seller.yelp = yelp;
    seller.homepage = homepage;
    seller.youtube = youtube;
    await seller.save();
    console.log("SUCCESS: updating seller information");
    return res.status(200).json(seller);
  } catch (err) {
    console.log("FAILED: updating seller information");
    return res.status(500).json(err);
  }
};

exports.remove = async (req, res) => {
  const { sellerId } = req.params;
  try {
    const seller = await Sellers.findOne({ where: { id: sellerId } });
    await seller.destroy();
    console.log("SUCCESS: delete seller information");
    return res.json(seller);
  } catch (err) {
    console.log("FAILED: delete seller information");
    return res.status(500).json({ err });
  }
};
