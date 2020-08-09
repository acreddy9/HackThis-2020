import React from "react";
// navigation
import { StyleSheet, View, FlatList, TextInput, Button } from "react-native";
import { createBottomTabNavigator } from "../node_modules/@react-navigation/bottom-tabs";
import { Ionicons } from "../node_modules/@expo/vector-icons";
// components
import Profile from "./Profile.js";
import Settings from "./Settings.js";
import Match from "./Match.js";
import Chat from "./Chat.js";
// styling
import styles from "./styles.js";

const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        /*<NavigationContainer>  need to get rid of this NavigationContainer piece when using MainStacks */ 
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
                        
                    /* tabBarLabel: route.name */
                        
                })}

                // Icon change when clicking the tab
                tabBarOptions={{
                    activeTintColor: "#41B8E8",
                    inactiveTintColor: "#264653",
                    adaptive: true,
                    tabStyle: {
                        padding: 0, margin: 10,   
                    },
                }}
            >
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Settings" component={Settings} />
                <Tab.Screen name="Match" component={Match} />
                <Tab.Screen name="Chat" component={Chat} />
            </Tab.Navigator>
        /*</NavigationContainer>*/
    );
}

export default MainTabs;