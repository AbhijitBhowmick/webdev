
/*****Simple http server in express */
const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// app.get('/', function(req, res)  {
//   res.send('Hello World!')
// })

// app.listen(port, function() {
//   console.log(`Example app listening on port ${port}`)
// })

app.get('/', function(req, res)  {
  //res.send('Hello World!')
  res.json({
    message: 'Hello World!',
    firstname: "John Doe",
    age: 30
  })
})

app.listen(port)