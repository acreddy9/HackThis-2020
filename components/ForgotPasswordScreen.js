import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';



export default function ForgotPasswordScreen({navigation}) {
    const [email, setEmail] = useState('');

    const onResetPress = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.footerText}>Request to reset password has been sent to your email.</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>Lorem</Text>
            <Text style={styles.appName}>{"     "}</Text>
            <Text style={styles.appName}>{"     "}</Text>
            <Text style={styles.footerText}>Please enter account email to receive password reset link.</Text>
            <Text style={styles.appName}>{"     "}</Text>
            <TextInput
                style={styles.input}
                placeholder='School e-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onResetPress()}>
                <Text style={styles.buttonTitle}>RESET PASSWORD</Text>
            </TouchableOpacity>
        </View>
    );
}