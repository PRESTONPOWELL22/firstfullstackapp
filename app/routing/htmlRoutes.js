module.exports = function (app, express) {
  app.get('/survey', function (req, res) {
    res.redirect('survey.html')
  })
  app.get('/*', function (req, res) {
    res.redirect('index.html')
  })
}
