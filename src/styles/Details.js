import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const detailsStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: width * .45,
        height: width * .45,
        margin: 20,
        borderRadius: width * .225,
        backgroundColor: '#dddddd',
        alignSelf: 'center',
        marginBottom: 40
    },
    detail: {
        margin: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    field: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 15
    },
    value: {
        flex: 3,
        fontSize: 15
    },
    link: {
        flex: 3,
        fontSize: 15,
        color: 'blue'
    }
});

export default detailsStyle;