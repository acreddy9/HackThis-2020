import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabs from './components/MainTabs.js';
import LoginScreen from './components/LoginScreen.js';
import RegistrationScreen from "./components/RegistrationScreen.js";
import ForgotPasswordScreen from './components/ForgotPasswordScreen.js';
import MatchScreen from './components/MatchScreen.js'

import { NavigationContainer } from "./node_modules/@react-navigation/native";
import { createStackNavigator } from './node_modules/@react-navigation/stack';
import { firebase } from './server/config';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const Stack = createStackNavigator();

async function fetchFonts() { 
  await Font.loadAsync({
      'Ubuntu-Light': require('./assets/fonts/Ubuntu-L.ttf'),
      'Ubuntu-Medium': require('./assets/fonts/Ubuntu-M.ttf')
    })
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setUser(null)
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  if (!fontsLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onError={() => {console.log("FONT ERROR")}}
        onFinish={() => {setFontsLoaded(true)}}
      />
    );
  }
  else {
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="RegistrationScreen" headerMode="none">
          { user ? (
            <Stack.Screen name="MainTabs" >
            {props => <MainTabs {...props} extraData={user} />}
            </Stack.Screen>
          ) : (
            <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            </>)}
        </Stack.Navigator>
    </NavigationContainer>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

