import React, { useState } from 'react';
import {getWeather} from "../api/getWeather";
import {styles} from "./homePage.styled";
import {Text, TextInput, View, Image, Button} from "react-native";

export const HomePage = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async () => {
            const data = await getWeather(query);
            setWeather(data);
            setQuery('');
    }

    return (
        <View style={styles.mainContainer}>
            <TextInput style={styles.input} placeholder="Enter City" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <Button onPress={search}>
                <Text>Go</Text>
            </Button>
            {weather.main && (
                <View style={styles.city}>
                    <Text style={styles.cityName}>
                        <Text>{weather.name}</Text>
                        <Text>{weather.sys.country}</Text>
                    </Text>
                    <View style={styles.cityTemp}>
                        {Math.round(weather.main.temp)}
                        <Text>&deg;C</Text>
                    </View>
                    <View style={styles.info}>
                        <Image src={weather.weather[0].icon}/>
                        <Text>{weather.weather[0].description}</Text>
                    </View>
                </View>
            )}
        </View>
    );
}

