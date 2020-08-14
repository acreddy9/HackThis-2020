import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function MatchProfile({ route, navigation }) {
    const { selectedMatch } = route.params;

    const onBackPress = () => {
        navigation.navigate('MatchScreen')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                <Ionicons name="ios-arrow-back" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatButton} onPress={()=> navigation.navigate('ChatRoom')}>
                <MaterialCommunityIcons name="chat" size={40} color={"#6c63ff"} iconStyle={styles.chatButton}/>
                <Text style={styles.buttonTitle}>CHAT</Text>
            </TouchableOpacity>
            <Text style={[styles.profileSectionHeader, {color: "#6c63ff", fontSize: 20}]}>{selectedMatch}</Text>
        </View>
    );
}
