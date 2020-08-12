import React, { useState } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import  Header  from './Header.js';
import styles from './styles';
import {firebase} from '../server/config';
import SearchableDropdown from 'react-native-searchable-dropdown';

const relationship = ["Friend", "Study buddy", "Both"];

const onDeleteAccount = () => {
    alert("Are you sure you want to delete your account?")
}

export default function PreferencesScreen ({route, navigation}) {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }

    return (
        <View>
            <Header title="Preferences"/>

            {/* matching preferences */}
            <View style={styles.matchSwitchContainer}>
                <Text style={styles.footerText}>Match with your classmates</Text> 
            </View>
                
            <Text style={styles.prefSectionHeader}>Who are you looking for?</Text> 

            <View style={styles.SearchableDroppie_course2}>
                <SearchableDropdown
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

            <Text style={styles.prefSwitchText}>Same year</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={styles.switchTrackColor}
                ios_backgroundColor="#3d3d3d"
            />

            <Text style={styles.prefSwitchText}>Same major</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={styles.switchTrackColor}
                ios_backgroundColor="#3d3d3d"
            />

            <Text style={styles.prefSwitchText}>Same learning style</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={styles.switchTrackColor}
                ios_backgroundColor="#3d3d3d"
            />

            <Text style={styles.prefSwitchText}>Same preferred mode of communication</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={styles.switchTrackColor}
                ios_backgroundColor="#3d3d3d"
            />

<           Text style={styles.prefSwitchText}>Similar availability</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={styles.switchTrackColor}
                ios_backgroundColor="#3d3d3d"
            />

            <Text style={styles.prefSwitchText}>Similar interests</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={styles.switchTrackColor}
                ios_backgroundColor="#3d3d3d"
            />

            <View style={styles.prefButtonContainer}>
                <TouchableOpacity style={styles.button}> 
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
                    style={styles.deleteAccountButton}
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
        </View>
    );
};