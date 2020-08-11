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
        color: "#6c63ff",
        fontSize: 40,
        fontFamily: "Ubuntu-Medium",
        paddingTop: 10
    },
    subtitle: {
        alignSelf: "center",
        color: "#3d3d3d",
        fontSize: 20,
        fontFamily: "Ubuntu-Light"
    },
    dropdownContainer: {
        width: 300,
        alignSelf: "center",
        backgroundColor: '#ffffff',
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
        maxHeight: 140,
        alignSelf: "stretch",
        marginLeft: 0
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
        height: 40,
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        alignSelf: 'center', // 'stretch'
        padding: 10,
        width: 300,
        marginLeft: 50,
        margin:5,
        marginRight: 50,
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
        width: 250,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignSelf: "center",
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
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 16,
        color: '#aaaaaa',
        fontFamily: "Ubuntu-Light"
    },
    footerLink: {
        color: "#6c63ff",
        fontSize: 16,
        fontFamily: "Ubuntu-Medium"
    },
    profilePic: {
        alignSelf: "center",
        width: 100,
        height: 100,
        borderRadius: 400,
        marginTop: 30,
        borderWidth: 3,
        borderColor: "#6c63ff"
    },
    profileSectionHeader: {
        marginTop: 30,
        marginLeft: 30,
        color: '#3d3d3d',
        fontFamily: "Ubuntu-Medium"
    },
    profileSectionText: {
        marginTop: 5,
        marginLeft: 30,
        color: '#3d3d3d',
        fontSize: 13,
        fontFamily: "Ubuntu-Light"
    },
    profileNameInput: {
        position: "absolute",
        left: 100,
        top: 150,
        right: 0,
        width: 240,
        height: 40,
        overflow: 'hidden',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        fontFamily: "Ubuntu-Light"
    },
    profileBioInput: {
        position: "absolute",
        left: 100,
        top: 195,
        right: 0,
        width: 240,
        height: 40,
        overflow: 'hidden',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        fontFamily: "Ubuntu-Light"
    },
})