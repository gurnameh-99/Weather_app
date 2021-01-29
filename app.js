// api-key eeb178d32a7a94334e6e2cd7c67f7c48
const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=eeb178d32a7a94334e6e2cd7c67f7c48&query=41.8781,-87.6298&units=m'

request({ url: url, json: true}, (error, response) => {
    // console.log(response.body.current)
    let temp = response.body.current.temperature
    let feels = response.body.current.feelslike
    console.log(response.body.current.weather_descriptions[0]+'. It is currently '+temp+' degrees outside and it feels like '+feels+' degrees.')
})