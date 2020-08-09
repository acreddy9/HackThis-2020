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
        fontFamily: "TrebuchetMS-Bold",
        paddingTop: 50
    },
    subtitle: {
        alignSelf: "center",
        color: "#3d3d3d",
        fontSize: 20,
        fontFamily: "TrebuchetMS"
    },
    dropdownContainer: {
        padding: 5,
        width: 280
    },
    dropdownItem: {
        padding: 10,
        marginTop: 2,
        backgroundColor: '#ddd',
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 5,
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
        borderRadius: 5
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    illustration: {
        padding: 20
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
        fontFamily: "TrebuchetMS"
    },
    button: {
        backgroundColor: '#3956d4',
        marginLeft: 100,
        marginRight: 100,
        marginTop: 20,
        height: 48,
        width: 270,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontFamily: "TrebuchetMS-Bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#aaaaaa',
        fontFamily: "TrebuchetMS"
    },
    footerLink: {
        color: "#3956d4",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "TrebuchetMS"
    }
})