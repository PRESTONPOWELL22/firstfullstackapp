
module.exports = function (app, express) {
  app.get('/survey', function (req, res) {
    res.sendFile('C:/Users/Preston Powell/Desktop/surveyFullstack/firstfullstackapp/app/public/survey.html')
  })

  app.get('/*', function (req, res) {
    res.sendFile('C:/Users/Preston Powell/Desktop/surveyFullstack/firstfullstackapp/app/public/index.html')
  })
}
