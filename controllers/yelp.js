require('dotenv').config()
const yelp = require('yelp-fusion')
const apiKey = process.env.YELP_API_KEY
const searchRequest = {
  limit: '50',
}
const client = yelp.client(apiKey)

exports.getLocal = (req, res, next) => {
  const latitude = req.body.lat
  const longitude = req.body.lng
  const searchLocal = {
    limit: '3',
    latitude: latitude,
    longitude: longitude,
    review_count: 1000,
    rating: 4.5,
  }
  client
    .search(searchLocal)
    .then((res) => {
      return res.jsonBody
    })
    .catch((e) => {
      console.log(e)
    })
    .then((data) => {
      res.status(200).json({ message: 'get detail title', data: data })
    })
}

exports.getDetail = (req, res, next) => {
  const name = req.body.title
  const latitude = req.body.lat
  const longitude = req.body.lng

  searchRequest.term = name
  searchRequest.latitude = latitude
  searchRequest.longitude = longitude

  client
    .search(searchRequest)
    .then((res) => {
      const detailResult = res.jsonBody
      return detailResult
    })
    .catch((e) => {
      console.log(e)
    })
    .then((data) => {
      res.status(200).json({ message: 'get detail title', data: data })
    })
}

exports.getAll = (req, res, next) => {
  const lat = req.body.lat
  const lng = req.body.lng
  searchRequest.latitude = lat
  searchRequest.longitude = lng
  client
    .search(searchRequest)
    .then((res) => {
      const firstResult = res.jsonBody.businesses
      return firstResult.map((item) => ({
        ...item,
        image: item.image_url,
        category: item.categories[0].alias,
        sellerId: 'yelp',
      }))
    })
    .then((randoms) => {
      res.status(200).json({
        message: 'Fetched posts successfully',
        data: randoms,
      })
    })

    .catch((e) => {
      console.log(e)
    })
}
