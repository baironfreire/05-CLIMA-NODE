const axios = require('axios');


const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=36b9defa50be432ef5595f11b28a947d&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima,
}