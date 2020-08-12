import { StyleSheet } from 'react-native';
import SearchableDropDown from 'react-native-searchable-dropdown';

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
        textAlign: "center",
        padding: 25,
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
        textAlign: "center",
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
        margin: 20,
        borderWidth: 3,
        borderColor: "#6c63ff"
    },
    profileSectionHeader: {
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
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
        top: 140,
        width: 400,
        height: 40,
        overflow: 'hidden',
        fontFamily: "Ubuntu-Light"
    },
    profilePronounsInput: {
        position: "absolute",
        left: 123,
        top: 176.5,
        width: 400,
        height: 40,
        overflow: 'hidden',
        fontFamily: "Ubuntu-Light"
    },
    profileBioInput: {
        position: "absolute",
        left: 80,
        top: 214.5,
        width: 400,
        height: 40,
        overflow: 'hidden',
        fontFamily: "Ubuntu-Light"
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 30
    },
    courseTile: {
        backgroundColor: '#f2f2ff',
        height: 80,
        width: 350,
        margin: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignSelf: "center",
        textAlign: "left",
        justifyContent: "center",
        shadowColor: "#000", // IOS
        shadowOffset: { height: 3, width: 3 }, // IOS
        shadowOpacity: 0.1, // IOS
        shadowRadius: 1, //IOS
        //backgroundColor: '#fff',
        elevation: 2, // Android
    },
    courseName: {
        color: '#3d3d3d',
        fontSize: 16,
        fontFamily: "Ubuntu-Medium"
    },
    professor: {
        color: '#3d3d3d',
        fontSize: 16,
        fontFamily: "Ubuntu-Light"
    },
    SearchableDroppie_year: {
        width: 271,
        height: 50,
        position: "relative",
        left: 135,
        bottom: 30


    },
    year_text: {
        position: "relative",
        top: 10  
    },
    major_text: {
        position: "relative",
        bottom: 20  
    },
    SearchableDroppie_major: {
        width: 271,
        height: 50,
        position: "relative",
        left: 135,
        bottom: 60


    }

})