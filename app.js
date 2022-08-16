// Hello world 예제

const express = require('express')
const app = express()
const port = 8080
const jsonParser = express.json({strict: false});
const cors = require('cors');

app.use(jsonParser);
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// POST method route
app.post('/lower', function (req, res) {
    console.log(req.body);
    res.json(req.body.toLowerCase());
  });

  // POST method route
app.post('/upper', function (req, res) {
    console.log(req.body);
    res.json(req.body.toUpperCase());
  }); // res.json으로 파싱
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
