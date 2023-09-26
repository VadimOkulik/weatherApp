import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
    },
    input: {
    padding: '20px 7%',
    borderRadius: '20px',
    border: 'none',
    marginBottom: '5%',
    background: 'rgba(250, 250, 250, 0.85)',
},
    city: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '40px 8%',
        borderRadius: '20px',
        background: "rgba(250, 250, 250, 0.85)",
        boxShadow: '10px 10px 5px 0px rgba(15, 15, 15, 0.404)',
    },
    cityName: {
        fontSize: '2em',
    },
    cityTemp: {
        fontSize: '5rem',
        fontWeight: 'bold',
        marginTop: '10px',
        color: '#1e2432',
        textAlign: 'center',
},
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    cityIcon: {
        marginTop: '10px',
        width: '100px',
        height: '100px',
    },



});

