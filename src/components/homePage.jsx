import React, { useState} from 'react';
import {getForecast} from "../api/getWeather";
import {styles} from "./homePage.styled";
import {Text, TextInput, View} from "react-native";
import {WeatherView} from "./weatherView";
import {useDispatch, useSelector} from "react-redux";
import {nextDay, prevDay, resetDay} from "../store/reducer/dateReducer";

export const HomePage = () => {
    const [query, setQuery] = useState('');
    const [weatherCity, setWeatherCity] = useState({});
    const [weatherForecast, setWeatherForecast] = useState([]);
    const [errorMesage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    const {curentDate} = useSelector((state) => state.dateReducer)

    const search = async () => {
        dispatch(resetDay())
        try {
            const data = await getForecast(query);
            setWeatherCity(data.city);

            const weatherResult = data.list.map((i) => {
                return {
                    temp: i.main.temp,
                    description: i.weather[0].description,
                    date: i.dt_txt,
                }
            })
            setWeatherForecast(weatherResult);
            setErrorMessage('');
        } catch (e) {
            console.log(e)
            setErrorMessage(`Invalid city ${query}`)
        } finally {
            setQuery('');
        }

    }
    const handleKeyEnter = async (e) => {
        if (e.key === "Enter") {
        await search();
    }}

    const handleChangeDate = (direction) => {
        console.log(curentDate)
        if(direction === 'prev' && curentDate >= 8) {
           dispatch(prevDay())
        }
        if(direction === 'next' && curentDate <= 16) {
            dispatch(nextDay())
        }
    }



    return (
        <View style={styles.mainContainer}>
            <View style={styles.search}>
            <TextInput style={styles.input} placeholder="Enter City" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={handleKeyEnter}/>
                <Text style={styles.button} onPress={search}>Go Search</Text>
            </View>
            {weatherForecast.length && !errorMesage.length ? (
                <WeatherView temp={weatherForecast[curentDate].temp} description={weatherForecast[curentDate].description} name={weatherCity.name} date={weatherForecast[curentDate].date} handleChangeDate={handleChangeDate} />
            ) : <Text style={styles.error}>{errorMesage}</Text>}
        </View>
    );
}

