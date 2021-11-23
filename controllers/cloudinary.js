const cloudinary = require('cloudinary')
const path = require('path')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

exports.upload = async (req, res) => {
  try {
    let result = await cloudinary.uploader.upload(req.body.data, {
      image_id: `${Date.now()}`,
      resource_type: 'auto',
      width: 1280,
      height: 720,
      crop: 'limit',
    })

    return res.status(200).json({
      image_id: result.public_id,
      image_url: result.secure_url,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).send()
  }
}

exports.remove = (req, res) => {
  let image_id = req.body.image_id
  cloudinary.uploader.destroy(image_id, (err, result) => {
    if (err) return res.json({ success: false, err })
    res.send('successfully deleted the image in cloudinary')
  })
}
