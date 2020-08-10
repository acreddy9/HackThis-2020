import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 25,
        height: 60,
        marginBottom: 0,
        backgroundColor: '#ffffff',
    },
    appName: {
        alignSelf: "center",
        color: "#3956d4",
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "Ubuntu-Light",
        paddingTop: 30
    },
    subtitle: {
        alignSelf: "center",
        color: "#3d3d3d",
        fontSize: 20,
        fontFamily: "Ubuntu-Light"
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    illustration: {
        padding: 50,
        margin: 30,
        height: 200,
        width: 200
    },
    dropdownContainer: {
        padding: 5,
        width: 280,
    },
    dropdownItem: {
        padding: 10,
        marginTop: 2,
        backgroundColor: '#eee',
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily: "Ubuntu-Light",
    },
    dropdownItemText: {
        color: "#222"
    },
    dropdownItemContainer: {
        maxHeight: 140
    },
    dropdownInputProps: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontFamily: "Ubuntu-Light"
    },
    title: {

    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        alignSelf: 'stretch',
        padding: 10,
        marginLeft: 50,
        margin:5,
        marginRight:50,
        borderBottomColor: '#e6e3e3',
        borderBottomWidth: 1,
        fontFamily: "Ubuntu-Light"
    },
    button: {
        backgroundColor: '#6c63ff',
        marginLeft: 100,
        marginRight: 100,
        marginTop: 20,
        height: 48,
        width: 150,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Ubuntu-Medium"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#aaaaaa',
        fontFamily: "Ubuntu-Light"
    },
    footerLink: {
        color: "#3956d4",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Ubuntu-Light"
    },
    profilePic: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    }
})