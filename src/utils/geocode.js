const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.geoapify.com/v1/geocode/search?text=' + address + '&apiKey=afcbb5611c934113ba0ee5b960e5590f';

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to location service!', undefined);
        }
        else if(body.error || body.features.length === 0){
            callback('Unable to find geocode location.', undefined);
        }
        else{
            callback(undefined, {
                latitude: body.features[0].properties.lat,
                longitude: body.features[0].properties.lon,
                location: body.features[0].properties.formatted
            });
        } 
    });
}

module.exports = geocode;