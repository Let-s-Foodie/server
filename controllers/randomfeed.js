require("dotenv").config();
const yelp = require('yelp-fusion');
const apiKey = process.env.API_KEY;
const searchRequest = {
    term: 'food',
    location: 'fremont, ca',
    limit: '50'
}
const client = yelp.client(apiKey);


exports.getRandom = (req,res,next) => {
   client.search(searchRequest)
        .then(res => {
        const firstResult = res.jsonBody
        console.log(res.jsonBody.businesses)
        const prettyJson = JSON.stringify(firstResult, null,4);
        return firstResult;
    })
        .then(randoms => {
            res.status(200)
            .json({
                message: 'Fetched posts successfully',
                data: randoms,
            })
        })
    
        .catch(e=>{
        console.log(e)
        })
}