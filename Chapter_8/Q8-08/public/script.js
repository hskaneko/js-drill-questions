const weatherURL = '/api/weathers'

function updateWeatherInfo() {
  fetch(weatherURL)
    ./* ① */(response => { return response./* ② */() })
    ./* ③ */(weathers => {
      const { today, tomorrow } = weathers
      document.getElementById('today').innerHTML = `Today : ${today}`
      document.getElementById('tomorrow').innerHTML = `Tomorrow: ${tomorrow}`
    })
}

const weatherURL = '/api/weathers'

function updateWeatherInfo() {
  fetch(weatherURL)
    .then(response => { return response.json() })
    .then(weathers => {
      const { today, tomorrow } = weathers
      document.getElementById('today').innerHTML = `Today : ${today}`
      document.getElementById('tomorrow').innerHTML = `Tomorrow: ${tomorrow}`
    })
}
