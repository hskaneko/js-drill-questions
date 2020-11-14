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

function updateWeatherInfo() {
  fetch(weatherURL)
    .then(response => { return response.json() })
    .then(weathers => {
      const { today, tomorrow } = weathers
      document.getElementById('today').innerHTML = `Today : ${today}`
      document.getElementById('tomorrow').innerHTML = `Tomorrow: ${tomorrow}`
    })
}

// 実行結果
// load ボタンを押下すると、以下のように表示される
// Today : cloudy
// Tomorrow: rain
