import axios from 'axios';



export const getWeather = async (city) => {

    const API_KEY = '32f6c0a1c96c035460e2fc7376f87f6f';
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;

    const { data } = await axios.get(URL, {
        params: {
            q: city,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}