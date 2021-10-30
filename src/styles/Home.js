import { StyleSheet } from 'react-native';

const homeStyle = StyleSheet.create({
    container: {
        padding: 5
    },
    employee: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 5
    },
    profile: {
        width: 45,
        height: 45,
        margin: 5,
        borderRadius: 22.5,
        backgroundColor: '#dddddd'
    },
    tile: {
        margin: 5,
        marginLeft: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18
    },
    description: {
        fontSize: 11,
        color: '#aaaaaa'
    }
});

export default homeStyle;