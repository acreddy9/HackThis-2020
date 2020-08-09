import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import  Header  from './Header.js';
// import profileIcon from '../assets/profile-icon.png';
// import ImagePicker from 'expo-image-picker'

function ProfileScreen ({ route }) {
    const userID = route.params.data.id

    return (
        <View>
            <Header title="Profile"/>
    <Text>Hi, {userID}.</Text>
        </View>
    );
};

export default ProfileScreen;