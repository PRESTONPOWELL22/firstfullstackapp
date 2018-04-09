var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, 'app/public')))


app.get('/this', function (req, res) {
  res.send('<h1>you suck</h1>')
})

app.get('/that', function (req, res) {
  res.send('hello')
})

app.listen(3010)
