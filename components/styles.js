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
    backButton: {
        position: "absolute",
        top: 35,
        left: 30
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
    SearchableDroppie_year: {
        width: 271,
        height: 50,
        left: 110,
        bottom: 30
    },
    year_text: {
        top: 10  
    },
    major_text: {
        bottom: 20  
    },
    SearchableDroppie_major: {
        width: 271,
        height: 50,
        left: 110,
        bottom: 60
    },
    courses_text: {
        bottom: 45  
    },
    SearchableDroppie_course1: {
        width: 175,
        height: 50,
        marginLeft: 25,
        bottom: 30
    },
    SearchableDroppie_course2: {
        width: 175,
        height: 50,
        marginLeft: 205,
        bottom: 80
    },
    SearchableDroppie_course3: {
        width: 175,
        height: 50,
        marginLeft: 25,
        bottom: 80,
    },
    SearchableDroppie_course4: {
        width: 175,
        height: 50,
        marginLeft: 205,
        bottom: 130,
    },
    addacourse_text: {
        fontFamily:"Ubuntu-Medium",
        color:'#6C63FF',
        marginLeft: 288,
        bottom: 20,
        marginBottom: -30
    },
    learnstyle_text: {
        bottom: 110,
    },
    SearchableDroppie_learn1: {
        width: 160,
        height: 50,
        marginLeft: 220,
        bottom: 160,
    },
    SearchableDroppie_learn2: {
        width: 160,
        height: 50,
        marginLeft: 220,
        bottom: 160,
    },
    SearchableDroppie_learn3: {
        width: 160,
        height: 50,
        marginLeft: 220,
        bottom: 160,
    },
    comm_text: {
        position: 'relative',
        bottom: 140,
    },
    SearchableDroppie_comm1: {
        width: 112,
        height: 50,
        marginLeft: 270,
        bottom: 190,
    },
    SearchableDroppie_comm2: {
        width: 112,
        height: 50,
        marginLeft: 270,
        bottom: 190,
    },
    SearchableDroppie_comm3: {
        width: 112,
        height: 50,
        marginLeft: 270,
        bottom: 190,
    },
    av_text: {
        position: 'relative',
        bottom: 210,


    },
    avBottomText1: {
        position: 'relative',
        bottom: 170,
        marginBottom: 30,


    },
    avBottomText2: {
        position: 'relative',
        bottom: 170,
        marginBottom: 30,


    },
    avBottomText3: {
        position: 'relative',
        bottom: 170,
        marginBottom: 30,


    },
    dayText: {
        color: '#3d3d3d',
        fontSize: 13,
        fontFamily: "Ubuntu-Light",
        marginRight: 30,
        
        

        
    },
    days: {
        bottom: 150,
        marginLeft: 130,
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    checkboxGrid1: {
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        bottom: 330,
        marginLeft: 120,
        
        

    },
    checkboxGrid2: {
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        bottom: 300,
        marginLeft: 120,
    
        
        
    },
    checkboxGrid3: {
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        bottom: 270,
        marginLeft: 120,
    
        
        
    },

    interests1: {
        position: "relative",
        bottom: 210,
        marginLeft: 70,

    },
    intText: {
        fontFamily: "Ubuntu-Light",
        marginBottom: 30,
    },
    intCheckboxGrid1:{
        marginLeft: 30,
        bottom: 483

    },

    interests2: {
        position: "relative",
        bottom: 743,
        marginLeft: 290,

    },

    intCheckboxGrid2:{
        marginLeft: 250,
        bottom: 1015

    },
    scButton: {
        position: "relative",
        bottom: 990,

    },

    // Preferences -------------------------------------------------------------------------
    matchFeatureSwitchContainer: {
        backgroundColor: "#E6E6E6",
        marginLeft: 100,
        marginRight: 100,
        marginTop: 20,
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
        width: 300,
        height: 50,
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
        color: "#505050",
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

    // Matches -------------------------------------------------------------------------
    matchTile: { // use style={styles.courseTile, styles.matchTile}
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
        top: 35,
        left: 290,
        color: '#8DD8AA',
        fontSize: 20,
        fontFamily: "Ubuntu-Medium"
    },
    whiteSpace: {
        paddingTop: 0
    },
    wholeScreen: {
        
    },
})