const express = require('express');
const zod = require('zod');
const app = express();
const scheema = zod.array(zod.number());

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
    const kidneyids = req.body.kidneyids;
    const kidneyidsResult = scheema.safeParse(kidneyids);
    res.send(kidneyidsResult);
    
});
