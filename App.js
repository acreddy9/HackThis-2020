import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabs from './components/MainTabs.js';
import Login from './components/Login.js'
import Registration from "./components/Registration.js";
import { NavigationContainer } from "./node_modules/@react-navigation/native";
import { createStackNavigator } from './node_modules/@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
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

