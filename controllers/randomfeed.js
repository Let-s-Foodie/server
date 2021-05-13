require("dotenv").config();
const yelp = require('yelp-fusion');
const apiKey = process.env.API_KEY;
const searchRequest = {
   
    location: 'fremont, ca',
    limit: '5'
}
const client = yelp.client(apiKey);

exports.getDetail = (req,res,next) => {
    console.log(req.body.title)
    const category = req.body.category;
    const name = req.body.title;
    const area = req.body.area;
    const latitude = "37.80468";
    const longitude = "-122.27119";
    const categoryarr = [];
    categoryarr.push(category);
    categoryarr.push(area);
   
    searchRequest.categories = category
    searchRequest.term = area
    // searchRequest.latitude = latitude;
    // searchRequest.longitude = longitude;
    
    console.log(searchRequest)
    client.search(searchRequest)
        .then(res => {
            const detailResult = res.jsonBody
            return detailResult;
        })
        .catch((e)=>{console.log(e)})
        .then(data => {
            res.status(200).json({message: 'get detail title',data: data})
        }

        )

}
exports.getRandom = (req,res,next) => {
   client.search(searchRequest)
        .then(res => {
        const firstResult = res.jsonBody
       // console.log(res.jsonBody.businesses)
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