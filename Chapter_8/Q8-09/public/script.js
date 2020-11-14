const weatherURL = '/api/weathers'

const todayElement = document.getElementById('today')
const tomorrowElement = document.getElementById('tomorrow')
const errorElement = document.getElementById('error')

function showWeather(today, tomorrow) {
  todayElement.innerHTML = `Today : ${today}`
  tomorrowElement.innerHTML = `Tomorrow: ${tomorrow}`
  errorElement.innerHTML = ''
}

function showError(errorMessage) {
  todayElement.innerHTML = ''
  tomorrowElement.innerHTML = ''
  errorElement.innerHTML = errorMessage
}

function updateWeatherInfo() {
  fetch(weatherURL)
    ./* ① */((response) => {
      if(response.ok) {
        return response./* ② */()
      } else {
        /* ③ */ new Error(`status code : ${response.status}`)
      }
    })
    ./* ④ */(weathers => { showWeather(weathers.today, weathers.tomorrow) })
    ./* ⑤ */(err => { showError(err.message) })
}

// 実行結果
// load ボタンを押下すると、「status code : 400」と表示される
