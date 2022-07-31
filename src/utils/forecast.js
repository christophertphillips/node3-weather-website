const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=00faf62cddf126593eca121628c891ee&query=' + latitude + ',' + longitude + '&units=f';

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined);
        }
        else if(body.error){
            callback('Unable to find forecast location.', undefined);
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humitity is ' + body.current.humidity + '%.');
        }
    });
}

module.exports = forecast;