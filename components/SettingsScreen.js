import React, { useState } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import  Header  from './Header.js';
import styles from './styles';

const onLogOut = () => {
}

const onDeleteAccount = () => {
    alert("Are you sure you want to delete your account?")
}

const SettingsScreen = () => {
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
                onPress={() => onLogOut()} >
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