var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, 'app/public')))

app.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/public/survey.html'))
})

app.listen(3011)
