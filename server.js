var express = require('express')
// var bodyParser = require('body-parser')
var path = require('path')
var app = express()
app.use(express.static(path.join(__dirname, 'app/public')))

var htmlRoutes = require('./app/routing/htmlRoutes.js')

htmlRoutes(app)
// app.get('/survey', function (req, res) {
//   res.sendFile('app/public/survey.html', {root: __dirname})
// })

// app.get('/survey', function (req, res) {
//   res.redirect('/survey.html')
// })

app.listen(3012)
