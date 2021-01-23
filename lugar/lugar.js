const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUlr}`,
        headers: { 'x-rapidapi-key': '571d6f5ba2mshbb6a9813eaff5ebp17fcd5jsneeed929b60d9' }
    });

    const resp = await instance.get();

    if (resp.data.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}