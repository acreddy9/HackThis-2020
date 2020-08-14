import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { firebase } from '../server/config';
import LoginIllustration from "../assets/login-illustration.svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLoginPress = () => {
      loginExistingUser(email, password)
    }

    const onFooterLinkPress = () => {
        navigation.navigate('RegistrationScreen')
    }

    const onForgotPassword = () => {
        navigation.navigate('ForgotPasswordScreen')
    }

    return (
      <View style={styles.container}>
          <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always" >
            <Text style={styles.appName}>Virmote</Text>
            <Text style={styles.subtitle}>welcome back :)</Text>

            <LoginIllustration width={350} height={270} marginTop={20} alignSelf={"center"}/> 

            <TextInput
                style={styles.input}
                placeholder='School e-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={[styles.button, {marginTop: 20}]}
                onPress={() => onLoginPress()}>
                <Text style={styles.buttonTitle}>LOG IN</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}> Sign up</Text></Text>
                <Text onPress={onForgotPassword} style={styles.footerLink}>Forgot your password?</Text>
            </View>
          </KeyboardAwareScrollView>
      </View>
    )

    function loginExistingUser(email, password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            const uid = res.user.uid
            const userRef = firebase.firestore().collection('users')
            userRef
              .doc(uid)
              .get()
              .then((doc) => {
                if(!doc.exists) {
                  alert('User does not exist anymore')
                }
                else {
                  console.log("Login success");
                  const user = doc.data()
                  navigation.replace('MainTabs', props.extraData=user);
                }
              }, () => { alert('Some other error occurred')})
              .catch((e) => console.log(e))
          })
          .catch((e) => {
            alert(e.message)
          })
      }
}