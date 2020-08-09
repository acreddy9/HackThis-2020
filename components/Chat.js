import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import  Header  from './Header.js';

const Chat = () => {
    return (
        <View>
            <Header title="Chat"/>
            <Text>Message your matched classmates!</Text>
        </View>
    );
};

export default Chat;