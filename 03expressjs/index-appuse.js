const express = require('express');
const app = express();

const port = 3002;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
// Middleware function to log the number of requests
let requestCount = 0;
function calculateRequests(req, res, next) {
    requestCount++;
    console.log(`Request count: ${requestCount}`);
    next();
}
app.use(calculateRequests)
app.use(express.json());

app.post('/health-checkup', function(req, res){
    console.log(req.query);
    const kidneyid = req.query.kidneyid;
    res.json({
        message: 'Good kidney'  ,
        firstname: "John Doe",
        calculateRequests: requestCount
    });
});