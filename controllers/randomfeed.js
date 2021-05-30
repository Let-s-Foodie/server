require("dotenv").config();
const yelp = require("yelp-fusion");
const apiKey = process.env.API_KEY;
const searchRequest = {
  limit: "5",
};
const client = yelp.client(apiKey);

exports.getDetail = (req, res, next) => {
  const name = req.body.title;
  const latitude = req.body.lat;
  const longitude = req.body.lng;

  searchRequest.term = name;
  searchRequest.latitude = latitude;
  searchRequest.longitude = longitude;

  client
    .search(searchRequest)
    .then((res) => {
      const detailResult = res.jsonBody;
      return detailResult;
    })
    .catch((e) => {
      console.log(e);
    })
    .then((data) => {
      res.status(200).json({ message: "get detail title", data: data });
    });
};
exports.getRandom = (req, res, next) => {
  client
    .search(searchRequest)
    .then((res) => {
      const firstResult = res.jsonBody;

      return firstResult;
    })
    .then((randoms) => {
      res.status(200).json({
        message: "Fetched posts successfully",
        data: randoms,
      });
    })

    .catch((e) => {
      console.log(e);
    });
};
