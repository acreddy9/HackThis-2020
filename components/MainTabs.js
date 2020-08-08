import React from 'react';

// navigation
import { StyleSheet, View, FlatList, TextInput, Button } from "react-native";
import { NavigationContainer } from "../node_modules/@react-navigation/native";
import { createBottomTabNavigator } from "../node_modules/@react-navigation/bottom-tabs";
import { createStackNavigator } from '../node_modules/@react-navigation/stack'
import { Ionicons } from "../node_modules/@expo/vector-icons";
import 'react-native-gesture-handler';
import { useEffect, useState } from 'react'

// components
import Profile from "./Profile.js";
import Preferences from "./Preferences.js";
import FindClassmates from "./FindClassmates.js";
import { LoginScreen, HomeScreen, RegistrationScreen } from './'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

// styling
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 25,
      height: 60,
      marginBottom: 0,
      backgroundColor: '#8baab5',
    },
  });

// elements ----------------------------------------------------------------------

// profile screen
const ProfileScreen = (props) => {
    return (
        <View style={styles.container}>
            <Profile />
        </View>
    );
};

// preferences screen
const PrefScreen = (props) => {
    return (
        <View style={styles.container}>
            <Preferences />
        </View>
    );
};

// find classmates screen
const FindScreen = (props) => {
    return (
        <View style={styles.container}>
            <FindClassmates />
        </View>
    );
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <NavigationContainer>

    <Stack.Navigator>
        { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Profile") {
                            iconName = focused ? "md-person" : "md-person";
                        } else if (route.name === "Preferences") {
                            iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles";
                        } else if (route.name === "Find Classmates") {
                            iconName = focused ? "md-search" : "md-search";
                        } 

                        return <Ionicons name={iconName} size={size} color={color} />;
                     },
                     
                     tabBarLabel: route.name
                     
                })}

                // Icon change when clicking the tab
                tabBarOptions={{
                    activeTintColor: "#E9C46A",
                    inactiveTintColor: "#264653",
                    adaptive: true,
                    tabStyle: {
                        padding: 0, margin: 10,   
                    },
                }}
          >
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Preferences" component={PrefScreen} />
                <Tab.Screen name="Find Classmates" component={FindScreen} />
            </Tab.Navigator>
         </NavigationContainer> 
    );
}

export default MainTabs;