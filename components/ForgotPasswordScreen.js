import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import auth from '../server/auth'
import { Ionicons } from "../node_modules/@expo/vector-icons";

export default function ForgotPasswordScreen({navigation}) {
    const [email, setEmail] = useState('');

    const onResetPress = () => {
        auth.resetPassword(email)
        return (
            <View style={styles.container}>
                <Text style={styles.subtitle}>Request to reset password has been sent to your email.</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('LoginScreen')}>
                <Ionicons name="ios-arrow-back" size={25} color="#3d3d3d"/>
            </TouchableOpacity>
            <Text style={styles.appName}>Virmote</Text>
            <Text style={{padding: 60}}></Text>
            <Text style={[styles.subtitle, {width:300}]}>Please enter account email to receive password reset link.</Text>
            <Text style={{padding: 10}}></Text>
            <TextInput
                style={styles.input}
                placeholder='School e-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"
            />
            <Text style={{padding: 5}}></Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onResetPress()}>
                <Text style={styles.buttonTitle}>RESET PASSWORD</Text>
            </TouchableOpacity>
        </View>
    );
}