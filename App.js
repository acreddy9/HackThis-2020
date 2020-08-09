import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabs from './components/MainTabs.js';
import LoginScreen from './components/LoginScreen.js'
import RegistrationScreen from "./components/RegistrationScreen.js";
import { NavigationContainer } from "./node_modules/@react-navigation/native";
import { createStackNavigator } from './node_modules/@react-navigation/stack';
import { app } from 'firebase';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="RegistrationScreen" headerMode="none">
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} headerShown={false}/>
            <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

