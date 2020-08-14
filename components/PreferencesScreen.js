import React, { useState, useEffect } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import  Header  from './Header.js';
import styles from './styles';
import {firebase} from '../server/config';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { setMatchEnable } from '../server/userPrefs';
import { FontAwesome } from '../node_modules/@expo/vector-icons';


const relationships = [
    {id: 1, name: "Friend"},
    {id: 2, name: "Study buddy"},
    {id: 3, name: "Both"}
];

const onDeleteAccount = () => {
    alert("Are you sure you want to delete your account?")
}

export default function PreferencesScreen ({route, navigation}) {

    const userID = route.params.data.id;

    const [isEnabled, setIsEnabled] = useState(true);
    const [yearSwitch, setYearSwitch] = useState(false);
    const [majorSwitch, setMajorSwitch] = useState(false);
    const [learnSwitch, setLearnSwitch] = useState(false);
    const [commSwitch, setCommSwitch] = useState(false);
    const [availabilitySwitch, setAvailabilitySwitch] = useState(false);
    const [interestSwitch, setInterestSwitch] = useState(false);
    
    useEffect(() => {
        const usersRef = firebase.firestore().collection('users');
        usersRef.doc(userID).get().then((document) => {
          const userData = document.data()
          if(userData.matchEnable === true) {
            setIsEnabled(true)
          }
          else{
              setIsEnabled(false)
          }
      }).catch((error)=> alert(error.message))
    })

    const toggleSwitch = () => {
        if (isEnabled) {
            setMatchEnable(userID, false) //in database
        }
        else{
            setMatchEnable(userID, true) //in database
        } 
        setIsEnabled(!isEnabled);
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
                        trackColor={{ false: "#aaa", true: "#6c63ff" }}
                        ios_backgroundColor="#aaa"
                    />
                </View>
                    
                <Text style={styles.prefSectionHeader}>Who are you looking for?</Text> 

                <View style={styles.prefDropdown}>
                    <SearchableDropdown
                        //onItemSelect={(item) => setRelationPref(item.name)}
                        onItemSelect={(item) => {}}
                        containerStyle={{ padding: 5 }}
                        textInputStyle={ isEnabled
                            ? {
                                padding: 7,
                                borderWidth: 1,
                                borderColor: '#626262',
                                backgroundColor: '#FFF',
                                borderRadius: 7,
                            } : {
                                padding: 7,
                                borderWidth: 1,
                                borderColor: '#aaa',
                                backgroundColor: '#FFF',
                                borderRadius: 7
                        }}
                        itemStyle={{
                            padding: 7,
                            marginTop: 0,
                            backgroundColor: '#FFF',
                            borderColor: '#626262',
                        }}
                        itemTextStyle={ isEnabled 
                            ? {fontFamily: "Ubuntu-Light", color: "#222"}
                            : {fontFamily: "Ubuntu-Light", color: "#aaa"}
                        }
                        itemsContainerStyle={{
                            maxHeight: '80%',
                            borderWidth: 0.2,
                            borderRadius: 7
                        }}
                        items={relationships}
                        placeholder="Friend / Study buddy / Both"
                        resetValue={false}
                        underlineColorAndroid="transparent"
                        disabled={!isEnabled}
                    />
                    <FontAwesome 
                        name="caret-down"
                        size={24}
                        color={isEnabled ? "#6c63ff": "#aaa"}
                        style={{position: "absolute", top: 10, right: 17}}
                    />
                </View>

                <Text style={isEnabled ? styles.prefSwitchText : [styles.prefSwitchText, {color: "#aaa"}]}>Same year</Text>
                <Switch
                    style={{position: "absolute", top: 188, left: 275}}
                    onValueChange={() => setYearSwitch(previousState => !previousState)}
                    value={yearSwitch}
                    disabled={!isEnabled}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={"#aaa"}
                />

                <Text style={isEnabled ? styles.prefSwitchText : [styles.prefSwitchText, {color: "#aaa"}]}>Same major</Text>
                <Switch
                    style={{position: "absolute", top: 237, left: 275}}
                    onValueChange={() => setMajorSwitch(previousState => !previousState)}
                    value={majorSwitch}
                    disabled={!isEnabled}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={"#aaa"}
                />

                <Text style={isEnabled ? styles.prefSwitchText : [styles.prefSwitchText, {color: "#aaa"}]}>Same learning style</Text>
                <Switch
                    style={{position: "absolute", top: 286, left: 275}}
                    onValueChange={() => setLearnSwitch(previousState => !previousState)}
                    value={learnSwitch}
                    disabled={!isEnabled}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={"#aaa"}
                />

                <Text style={isEnabled ? styles.prefSwitchText : [styles.prefSwitchText, {color: "#aaa"}]}>Same communication style</Text>
                <Switch
                    style={{position: "absolute", top: 335, left: 275}}
                    onValueChange={() => setCommSwitch(previousState => !previousState)}
                    value={commSwitch}
                    disabled={!isEnabled}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={"#aaa"}
                />

                <Text style={isEnabled ? styles.prefSwitchText : [styles.prefSwitchText, {color: "#aaa"}]}>Similar availability</Text>
                <Switch
                    style={{position: "absolute", top: 384, left: 275}}
                    onValueChange={() => setAvailabilitySwitch(previousState => !previousState)}
                    value={availabilitySwitch}
                    disabled={!isEnabled}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={"#aaa"}
                />

                <Text style={isEnabled ? styles.prefSwitchText : [styles.prefSwitchText, {color: "#aaa"}]}>Similar interests</Text>
                <Switch
                    style={{position: "absolute", top: 433, left: 275}}
                    onValueChange={() => setInterestSwitch(previousState => !previousState)}
                    value={interestSwitch}
                    disabled={!isEnabled}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={"#aaa"}
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