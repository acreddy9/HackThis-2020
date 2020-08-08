import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import  Header  from './Header.js';
// import profileIcon from '../assets/profile-icon.png';
// import ImagePicker from 'expo-image-picker'

const Profile = () => {
    return (
        <View>
            <Header title= "Profile"/>
            <Text>Who are you?</Text>
        </View>
    );
};

export default Profile;