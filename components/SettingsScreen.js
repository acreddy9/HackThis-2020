import React, { useState } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import  Header  from './Header.js';
import styles from './styles';
import {firebase} from '../server/config'

const onDeleteAccount = () => {
    alert("Are you sure you want to delete your account?")
}

function SettingsScreen ({navigation}) {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }

    return (
        <View>
            <Header title="Settings"/>
            <Text>Preferences</Text> 
                {/* drop down button */}
            <Text>Notifications</Text> 
                {/* drop down button */}
            <Text>Matching</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    firebase
                        .auth()
                        .signOut()
                        .then(() => {() => {navigation.replace('LoginScreen')},() => {alert("Something went wrong!")}})
                }} >
                <Text style={styles.buttonTitle}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onDeleteAccount()} >
                <Text style={styles.buttonTitle}>Delete Account</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;