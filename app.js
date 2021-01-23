const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirreccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)

// .then(console.log);

// clima.getClima(139.6917, 35.6895)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${direccion} es de ${temp} C°.`;
    } catch (e) {
        return `No se pudo determinar el clima del lugar ${direccion}, ${e},${coords}, `
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);