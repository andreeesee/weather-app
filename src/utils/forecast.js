const request = require("request")

const forecast = (long, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=44f403efb68b1b7bba06395231c3b263&query='+ long +','+ lat +'&units=f'
    request({ url, json: true}, (error, {body} ) => {
        if(error){
            callback('Unable to connect to weather services', undefined)
        }else if(body.success === false){
            callback(response.body.error.info, undefined);
        }  else {
            const temp = body.current.temperature
            const feelsLike = body.current.feelslike
            const weatherDesc = body.current.weather_descriptions[0]
            
            callback(undefined, `Weather Description: ${weatherDesc}. It is currently ${temp} F but, it feels like ${feelsLike} F`)            
        }
    })

}

module.exports = forecast