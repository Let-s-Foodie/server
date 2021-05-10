require("dotenv").config();
const yelp = require('yelp-fusion');
const apikey = process.env.API_KEY;
const searchRequest = {
    term: 'food',
    location: 'fremont, ca',
    limit: '50'
}

const client = yelp.client(apikey);

exports.getRandom = (req,res,next) => {
    client.search(searchRequest)
        .then(res => {
            const firstResult = res.jsonBody
            return firstResult;
        })
            .then(randoms => {
                res.status(200)
                .json({
                    message: 'Fetched posts successfully.',
                    data: randoms,
                })
            })
            .catcj(e => {
                console.log(e)
            })
}