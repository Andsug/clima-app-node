const axios = require('axios');

const getClima = async(lat, lon) => {



    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?lat=${lat}&lon=${lon}&units=metric`,
        headers: { 'x-rapidapi-key': '571d6f5ba2mshbb6a9813eaff5ebp17fcd5jsneeed929b60d9' }
    });

    const resp = await instance.get();

    return resp.data.main.temp;
}

module.exports = {
    getClima
}