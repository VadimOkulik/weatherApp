import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
    },
    search: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 'auto',
    },
    button: {
        width: '30%',
        backgroundColor: '#7f4faf',
        textAlign: 'center',
        borderRadius: 10,
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        textAlign: 'center',

},

    city: {
        marginTop: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    cityName: {
        fontSize: '2em',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 50,
    },
    cityTemp: {
        fontSize: '5rem',
        fontWeight: 'bold',
        marginTop: '10px',
        color: '#1e2432',
        textAlign: 'center',
        flexDirection: 'row',
},
    info: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    cityIcon: {
        marginTop: '10px',
        width: '100px',
        height: '100px',
    },
    error: {
      marginTop: -100,
    },
    weekDays: {
      flexDirection: 'row',
      gap: 20,

    },



});

