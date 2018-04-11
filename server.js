var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
app.use(express.static(path.join(__dirname, 'app/public')))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

var apiRoutes = require('./app/routing/apiRoutes.js')
var htmlRoutes = require('./app/routing/htmlRoutes.js')
htmlRoutes(app, express)
apiRoutes(app, express)

app.listen(3012)
