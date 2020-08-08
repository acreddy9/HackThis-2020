import React from 'react';
import { Text, View } from 'react-native';
import  Header  from './Header.js';

const Preferences = () => {
    return (
        <View>
            <Header title= "Preferences"/>
            <Text>Who are you looking for?</Text>
        </View>
    );
};

export default Preferences;