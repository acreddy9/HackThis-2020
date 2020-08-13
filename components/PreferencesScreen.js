import React, { useState } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import  Header  from './Header.js';
import styles from './styles';
import {firebase} from '../server/config';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const relationship = ["Friend", "Study buddy", "Both"];

const onDeleteAccount = () => {
    alert("Are you sure you want to delete your account?")
}

export default function PreferencesScreen ({route, navigation}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [yearSwitch, setYearSwitch] = useState(false);
    const [majorSwitch, setMajorSwitch] = useState(false);
    const [learnSwitch, setLearnSwitch] = useState(false);
    const [commSwitch, setCommSwitch] = useState(false);
    const [availabilitySwitch, setAvailabilitySwitch] = useState(false);
    const [interestSwitch, setInterestSwitch] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        if (isEnabled) {
            setYearSwitch(false);
            setMajorSwitch(false);
            setLearnSwitch(false);
            setCommSwitch(false);
            setAvailabilitySwitch(false);
            setInterestSwitch(false);
        } 
    }

    return (
        <View style={styles.container}>
            <Header title="Preferences"/>

            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">

                <View style={styles.matchFeatureSwitchContainer}>
                    <Text style={[styles.footerText, styles.matchFeatureText]}>Match with your classmates</Text> 
                    <Switch
                        style={{position: "absolute", left: 240}}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        trackColor={{ false: "#979797", true: "#6c63ff" }}
                        ios_backgroundColor="#3d3d3d"
                    />
                </View>
                    
                <Text style={styles.prefSectionHeader}>Who are you looking for?</Text> 

                <View style={styles.prefDropdown}>
                    <SearchableDropdown
                        //style={CaretPosition}
                        onTextChange={text => console.log(text)}
                        //On text change listner on the searchable input
                        onItemSelect={item => alert(JSON.stringify(item))}
                        //onItemSelect called after the selection from the dropdown
                        containerStyle={{ padding: 5 }}
                        //suggestion container style
                        textInputStyle={{
                        //inserted text style
                        padding: 7,
                        borderWidth: 1,
                        borderColor: '#626262',
                        backgroundColor: '#FFF',
                        borderRadius: 7
                        }}
                        itemStyle={{
                        //single dropdown item style
                        padding: 7,
                        marginTop: 0,
                        backgroundColor: '#FFF',
                        borderColor: '#626262',
                        }}
                        itemTextStyle={{
                        //single dropdown item's text style
                        color: '#222',
                        }}
                        itemsContainerStyle={{
                        //items container style you can pass maxHeight
                        //to restrict the items dropdown hieght
                        maxHeight: '80%',
                        borderWidth: 0.2,
                        borderRadius: 7
                        }}
                        items={relationship}
                        //mapping of item array
                        defaultIndex={2}
                        //default selected item index
                        placeholder="Friend / Study buddy / Both"
                        //place holder for the search input
                        resetValue={false}
                        //reset textInput Value with true and false state
                        underlineColorAndroid="transparent"
                        //To remove the underline from the android input
                    />
                </View>

                <Text style={[styles.footerText, styles.prefSwitchText]}>Same year</Text>
                <Switch
                    style={{position: "absolute", top: 175, left: 275}}
                    onValueChange={() => setYearSwitch(previousState => !previousState)}
                    value={yearSwitch}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={isEnabled ? "#aaa" : "#3d3d3d"}
                />

                <Text style={styles.prefSwitchText}>Same major</Text>
                <Switch
                    style={{position: "absolute", top: 224, left: 275}}
                    onValueChange={() => setMajorSwitch(previousState => !previousState)}
                    value={majorSwitch}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={isEnabled ? "#aaa" : "#3d3d3d"}
                />

                <Text style={styles.prefSwitchText}>Same learning style</Text>
                <Switch
                    style={{position: "absolute", top: 273, left: 275}}
                    onValueChange={() => setLearnSwitch(previousState => !previousState)}
                    value={learnSwitch}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={isEnabled ? "#aaa" : "#3d3d3d"}
                />

                <Text style={styles.prefSwitchText}>Same communication style</Text>
                <Switch
                    style={{position: "absolute", top: 322, left: 275}}
                    onValueChange={() => setCommSwitch(previousState => !previousState)}
                    value={commSwitch}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={isEnabled ? "#aaa" : "#3d3d3d"}
                />

    <           Text style={styles.prefSwitchText}>Similar availability</Text>
                <Switch
                    style={{position: "absolute", top: 371, left: 275}}
                    onValueChange={() => setAvailabilitySwitch(previousState => !previousState)}
                    value={availabilitySwitch}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={isEnabled ? "#aaa" : "#3d3d3d"}
                />

                <Text style={styles.prefSwitchText}>Similar interests</Text>
                <Switch
                    style={{position: "absolute", top: 420, left: 275}}
                    onValueChange={() => setInterestSwitch(previousState => !previousState)}
                    value={interestSwitch}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={isEnabled ? "#aaa" : "#3d3d3d"}
                />

                <View style={styles.prefButtonContainer}>
                    <TouchableOpacity style={[styles.button, styles.prefButton]}> 
                        <Text style={styles.buttonTitle}>CHANGE PASSWORD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            firebase
                                .auth()
                                .signOut()
                                .then(() => {
                                    //alert("signed out")
                                },
                                () => {
                                    console.log("Signing out didn't work")
                                    alert("Something went wrong!")}
                                )
                        }} >
                        <Text style={styles.buttonTitle}>LOG OUT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.prefButton, {backgroundColor: "#E36674"}]}
                        onPress={() => {
                            var user = firebase.auth().currentUser;
                            user.delete().then(function() {
                                alert("signed out")
                            }).catch(function(error) {
                                alert("Something went wrong!")
                            });
                        }} >
                        <Text style={styles.buttonTitle}>DELETE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};