const request = require('request')

const geoCode = (address, callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibXJsdWNreWpheSIsImEiOiJjazI4bWJyaWkyMWJjM2JtemdmODRkejg4In0.WSnRU6ocdF0BW2BXmbfJ8g&limit=1'


    request({ url, json: true }, (error, {body}={}) => {
        // const lat = response.body.features[0].center[1]
        // const lon = response.body.features[0].center[0]

        if (error) {
            callback('unable to connect to location Service')
        } else if (body.features.length === 0) {
            callback('Unable to find location please enter another location')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longititude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }



    }

    )


}

module.exports = geoCode