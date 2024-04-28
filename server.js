const express = require('express')
const request = require('request')
const app = express()

app.get('/weather/:city', (req, res) => {
  const city = req.params.city
  const apiKey = 'your_api_key'
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  request(url, (err, response, body) => {
    if (err) {
      res.send({ error: err })
    } else {
      const weather = JSON.parse(body)
      res.send({ weather: weather })
    }
  })
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})