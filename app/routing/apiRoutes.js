
module.exports = function (app, express) {
  var data = require('../data/friends')
  app.post('/api/friends', function (req, res) {
    data.push(req.body)
    console.log(data)
  })
  app.get('/api/friends', function (req, res) {
    // var data = require('../data/friends')
    res.write(JSON.stringify(data))
  })
}
