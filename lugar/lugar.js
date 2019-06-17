const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const encodedURL = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': '4f6fe514abmshe9e7906e4ef43e7p1abbe9jsnac35091b3e22' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        location,
        lat,
        lng,
    }
}

module.exports = {
    getLugarLatLng
}