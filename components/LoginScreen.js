import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {firebase} from '../server/config'



export default function LoginScreen({navigation}) {
    /* TODO: school */
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('RegistrationScreen')
    }

    const onLoginPress = () => {
        loginExistingUser(email, password)
    }

    const onAccessAccount = () => { /* TODO: remove once verification page works */
        navigation.replace('MainTabs')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>lorem</Text>
            <Text style={styles.subtitle}>welcome back :)</Text>
            
            {/* TODO: remove later */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => onAccessAccount()} >
                <Text style={styles.buttonTitle}>access account (remove later)</Text>
            </TouchableOpacity>

            <Image
                style={styles.logo}
                //source={require('../../../assets/icon.png')}
            />
            <TextInput
                style={styles.input}
                placeholder='school e-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onLoginPress()}>
                <Text style={styles.buttonTitle}>log in</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>sign up</Text></Text>
            </View>
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
                  navigation.replace('MainTabs');
                }
              }, () => { alert('Some other error occurred')})
              .catch((e) => console.log(e))
          })
          .catch((e) => {
            console.log(e.message)
          })
      }
}