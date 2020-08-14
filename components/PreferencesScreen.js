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
                        ios_backgroundColor="#aaa"
                    />
                </View>
                    
                <Text style={styles.prefSectionHeader}>Who are you looking for?</Text> 

                <View style={styles.prefDropdown}>
                    <SearchableDropdown
                        onTextChange={text => console.log(text)}
                        onItemSelect={item => alert(JSON.stringify(item))}
                        containerStyle={{ padding: 5 }}
                        textInputStyle={{
                            padding: 7,
                            borderWidth: 1,
                            borderColor: '#626262',
                            backgroundColor: '#FFF',
                            borderRadius: 7
                        }}
                        itemStyle={{
                            padding: 7,
                            marginTop: 0,
                            backgroundColor: '#FFF',
                            borderColor: '#626262',
                        }}
                        itemTextStyle={{
                            color: '#222',
                        }}
                        itemsContainerStyle={{
                            maxHeight: '80%',
                            borderWidth: 0.2,
                            borderRadius: 7
                        }}
                        items={relationship}
                        defaultIndex={2}
                        placeholder="Friend / Study buddy / Both"
                        resetValue={false}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <Text style={[styles.footerText, styles.prefSwitchText]}>Same year</Text>
                <Switch
                    style={{position: "absolute", top: 188, left: 275}}
                    onValueChange={() => setYearSwitch(previousState => !previousState)}
                    value={yearSwitch}
                    disabled={!isEnabled}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={"#aaa"}
                />

                <Text style={styles.prefSwitchText}>Same major</Text>
                <Switch
                    style={{position: "absolute", top: 237, left: 275}}
                    onValueChange={() => setMajorSwitch(previousState => !previousState)}
                    value={majorSwitch}
                    disabled={!isEnabled}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={"#aaa"}
                />

                <Text style={styles.prefSwitchText}>Same learning style</Text>
                <Switch
                    style={{position: "absolute", top: 286, left: 275}}
                    onValueChange={() => setLearnSwitch(previousState => !previousState)}
                    value={learnSwitch}
                    disabled={!isEnabled}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={"#aaa"}
                />

                <Text style={styles.prefSwitchText}>Same communication style</Text>
                <Switch
                    style={{position: "absolute", top: 335, left: 275}}
                    onValueChange={() => setCommSwitch(previousState => !previousState)}
                    value={commSwitch}
                    disabled={!isEnabled}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={"#aaa"}
                />

    <           Text style={styles.prefSwitchText}>Similar availability</Text>
                <Switch
                    style={{position: "absolute", top: 384, left: 275}}
                    onValueChange={() => setAvailabilitySwitch(previousState => !previousState)}
                    value={availabilitySwitch}
                    disabled={!isEnabled}
                    trackColor={{ false: "#aaa", true: "#6c63ff" }}
                    ios_backgroundColor={"#aaa"}
                />

                <Text style={styles.prefSwitchText}>Similar interests</Text>
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