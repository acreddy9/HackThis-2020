import React from 'react';
import { Text, View } from 'react-native';
import  Header  from './Header.js';

const Settings = () => {
    return (
        <View>
            <Header title="Settings"/>
            <Text>Preferences</Text> 
                {/* drop down button */}
            <Text>Notifications</Text> 
                {/* drop down button */}
            <Text>Matching</Text> 
                 {/* on/off switch */}
            <Text>Log Out</Text>
                {/* button */}
            <Text>Delete Account</Text>
                 {/* button */}
        </View>
    );
};

export default Settings;