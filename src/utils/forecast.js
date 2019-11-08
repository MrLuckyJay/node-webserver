const request = require('request')




const forecast = (lat,long,callback)=>{
    const url = 'https://api.darksky.net/forecast/c5d26eea9648348d1beef43d1282bec0/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + ''


    request({ url, json: true }, (error, {body}) => {
    const data = (body)
    // console.log(data.currently)
    if (error){
        callback('Unable to connect to weather service')
    } else if (data.error) {
        callback('unable to find location')
    }

    else{

        callback(undefined, data.daily.data[0].summary + 'its currently ' + data.currently.temperature + ' degrees out. There is a ' + data.currently.precipProbability + '% chance of rain')

    }

})

}



module.exports = forecast