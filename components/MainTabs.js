import React from "react";

// navigation
import { StyleSheet, View, FlatList, TextInput, Button } from "react-native";
import { NavigationContainer } from "../node_modules/@react-navigation/native";
import { createBottomTabNavigator } from "../node_modules/@react-navigation/bottom-tabs";
import { createStackNavigator } from '../node_modules/@react-navigation/stack'
import { Ionicons } from "../node_modules/@expo/vector-icons";


// components
import Profile from "./Profile.js";

import Settings from "./Settings.js";
import Match from "./Match.js";
import Chat from "./Chat.js";

import Login from './Login.js'
import Registration from "./Registration.js";



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

// settings screen
const SettingsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Settings />
        </View>
    );
};

// match with classmates screen
const MatchScreen = (props) => {
    return (
        <View style={styles.container}>
            <Match />
        </View>
    );
};

// chat screen
const ChatScreen = (props) => {
    return (
        <View style={styles.container}>
            <Chat />
        </View>
    );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Profile") {
                            iconName = focused ? "md-person" : "md-person";
                        } else if (route.name === "Settings") {
                            iconName = focused ? "md-settings" : "md-settings";
                        } else if (route.name === "Match") {
                            iconName = focused ? "md-search" : "md-search";
                        } else if (route.name === "Chat") {
                            iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles";
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
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Match" component={MatchScreen} />
                <Tab.Screen name="Chat" component={ChatScreen} />
            </Tab.Navigator>
         
    );
}

function MainStacks() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainTabs" component={MainTabs} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStacks;