import { StyleSheet, Dimensions } from 'react-native';
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
        padding: 10,
        backgroundColor: '#eee',
        borderColor: '#eee',
        borderWidth: 1,
        color: "#222",
        fontFamily: "Ubuntu-Light"
    },
    dropdownItemContainer: {
        //maxHeight: 140,
        color: "#aaa",
    },
    dropdownInputProps: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontFamily: "Ubuntu-Light"
    },
    input: {
        //height: 40,
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
        margin: 5,
        marginRight: 50,
        borderBottomColor: '#e6e3e3',
        borderBottomWidth: 1,
        fontFamily: "Ubuntu-Light"
    },
    button: {
        backgroundColor: '#6c63ff',
        marginLeft: 100,
        marginRight: 100,
        margin: 5,
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
        marginTop: 10
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
    backButton: {
        position: "absolute",
        top: 35,
        left: 30
    },

    // Profile -------------------------------------------------------------------------
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
        marginLeft: 20,
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
        left: 80,
        top: 140,
        width: 400,
        height: 40,
        overflow: 'hidden',
        fontFamily: "Ubuntu-Light"
    },
    dropdownYear: {
        width: 275,
        zIndex: 1,
        left: 80,
        bottom: 5
    },
    dropdownYearItemContainer: {
        
        backgroundColor: '#FFF',
        borderColor: '#626262',
    },
    dropdownYearItem: {
        backgroundColor: '#FFF',
        borderColor: '#626262',
    },
    dropdownYearTextInput: {
        padding: 7,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#626262',
        borderRadius: 7,
        fontFamily: "Ubuntu-Light"
    },
    addACourse: {
        color: "#6c63ff",
        fontFamily: "Ubuntu-Medium",
        left: 260,
        bottom: 36,
        marginBottom: -20,
        
    },
    learningTitle: { marginTop: 20, marginBottom: 10 },
    learningSubtitle: { marginLeft: 20, marginBottom: 10 },
    learningDropdown: {
        width: 150, margin: 6, marginLeft: 2, marginRight: 0, left: 15, marginBottom: 0, zIndex: 1
    },
    commTitle: { marginTop: 20, marginBottom: 10, marginLeft: 23 },
    commSubtitle: { marginLeft: 20, marginBottom: 10, marginLeft: 57 },
    commDropdown: {
        width: 150, margin: 6, marginRight: 0, left: 16, marginBottom: 0, zIndex:1
    },

    // Preferences -------------------------------------------------------------------------
    matchFeatureSwitchContainer: {
        backgroundColor: "#E6E6E6",
        marginLeft: 100,
        marginRight: 100,
        marginTop: 30,
        height: 48,
        width: 300,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    matchFeatureText: {
        position: "absolute",
        left: 0,
        color: "#505050"
    },
    prefSectionHeader: {
        alignSelf: "center",
        margin: 20,
        color: "#3d3d3d",
        fontSize: 16,
        fontFamily: "Ubuntu-Medium"
    },
    prefDropdown: {
        width: 280,
        marginBottom: 5,
        alignSelf: "center"
    },
    prefSwitchText: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 55,
        //width: 170,
        alignSelf: "flex-start",
        fontSize: 16,
        color: "#3d3d3d",
        fontFamily: "Ubuntu-Light"
    },
    prefButtonContainer: {
        backgroundColor: "#E6E6E6",
        alignSelf: "stretch",
        height: 255,
        marginTop: 30,
        padding: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    prefButton: {
        margin: 20,
    },

    // Courses -------------------------------------------------------------------------
    courseTile: {
        backgroundColor: '#f2f2ff',
        height: 80,
        width: 350,
        margin: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000", // IOS
        shadowOffset: { height: 3, width: 3 }, // IOS
        shadowOpacity: 0.1, // IOS
        shadowRadius: 1, //IOS
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

    // Matches -------------------------------------------------------------------------
    matchTile: { 
        height: 95,
        width: 350,
        alignItems: "flex-start"
    },
    matchTileBio: {
        color: '#3d3d3d',
        fontSize: 16,
        maxWidth: 300,
        maxHeight: 1,
        fontFamily: "Ubuntu-Light"
    },
    percent: {
        position: "absolute",
        left: 295,
        color: '#8DD8AA',
        fontSize: 20,
        fontFamily: "Ubuntu-Medium"
    },
    whiteSpace: {
        paddingTop: 0
    },

 
    // MatchScreen -------------------------------------------------------------------------
    match_img : {
        width: 126,
        height: 128,
        borderRadius: 100,
    },
    img_container: {
        position: "relative",
        right: 120,
        bottom:110
    },
    user_name: {
        position: "relative",
        left: 2,
        top: 5
    },
    user_stuff: {     
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginLeft: 45
        
    },
    wholeChatButton: {     
        position: "relative",
        top: 80,
        left: 130
    },
    user_bio: {
        position: "relative",
        bottom: 120,
    },

    sharedCourses_text: {
        bottom: 120,
        marginLeft: -150, 
    },
    LStyle_text: {
        bottom: 330,
        right: 105, 
    },
    commModeText: {
        bottom: 400,
        left: 90, 
    },
    days2: {
        top: 150,
    },

    

    // Chat -------------------------------------------------------------------------
    chatFooter: {
        flexDirection: 'row',
        height:60,
        backgroundColor: '#eeeeee',
        paddingHorizontal:10,
        padding:5,
    },
    chatSend:{
        width:40,
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
      },
      chatInputContainer: {
        backgroundColor:"#dedede",
        width:300,
        borderRadius:30,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
      },
      chatInputs:{
        backgroundColor: "#dedede",
        width: Math.round(Dimensions.get('window').width) - 50,
        maxHeight: 40,
        borderRadius:30,
        flexDirection: 'row',
        alignItems:'center',
        alignContent:'center',
        paddingLeft: 15,
        marginBottom: 10,
        marginTop: 10,
        flex:1,
      },
})