import React, { useState } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import  Header  from './Header.js';
import styles from './styles';
import {firebase} from '../server/config'

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
            <Text>Preferences</Text> 
                {/* drop down button */}
            <Text>Notifications</Text> 
                {/* drop down button */}
            <Text>Matching</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={{ false: "#3d3d3d", true: "#6c63ff"}}
                thumbColor={"#fff"}
                ios_backgroundColor="#3d3d3d"
            />
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
                <Text style={styles.buttonTitle}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    var user = firebase.auth().currentUser;
                    user.delete().then(function() {
                        alert("signed out")
                      }).catch(function(error) {
                        alert("Something went wrong!")
                      });
                }} >
                <Text style={styles.buttonTitle}>Delete Account</Text>
            </TouchableOpacity>
        </View>
    );
};