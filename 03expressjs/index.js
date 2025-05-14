const express = require('express');
const app = express();

const port = 3002
;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
app.get ('/health-checkup', function(req, res){
    console.log(req.query);
    const kidneyid = req.query.kidneyid;
    const userid = req.headers.userid;
    const password = req.headers.password;
    if (!(userid == "admin" && password == "admin")) {
        res.status(401).json({
            message: 'Unauthorized'
        });
    }
    if (kidneyid == null) {
        res.status(400).json({
            message: 'Bad Request'
            });
        } else {
        res.status(200).json({
            message: 'Good kidney'
        });
        }
        return;
    }
);