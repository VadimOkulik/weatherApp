import React from 'react';
import {styles} from "./homePage.styled";
import {Text, View, Button} from "react-native";
import {useSelector} from "react-redux";

export const WeatherView = ({temp, description, name, handleChangeDate, date}) => {

    const {curentDate} = useSelector((state) => state.dateReducer)

    return (
                <View style={styles.city}>
                    <View style={styles.cityName}>
                        <View>{name}</View>
                        <View style={styles.weekDays}>
                            <Button onPress={() => handleChangeDate('prev')} disabled={curentDate === 0} title={'<'} />
                            <View style={ { fontSize: '16px' } }>{date}</View>
                            <Button onPress={() => handleChangeDate('next')} disabled={curentDate === 16} title={'>'}/>
                        </View>
                    </View>
                    <View style={styles.cityTemp}>
                        {Math.round(temp)}
                        <Text>&deg;C</Text>
                    </View>
                    <View style={styles.info}>
                        <Text>{description}</Text>
                    </View>
                </View>
            )
}

