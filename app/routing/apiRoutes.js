
module.exports = function (app, express) {
  app.post('/api/friends', function (req, res) {
    // console.log(req.body)
    var data = require('../data/friends')
    data.push(req.body)
    console.log(data)
  })
}
