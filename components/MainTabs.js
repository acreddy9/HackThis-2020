import React from "react";
// navigation
import { createBottomTabNavigator } from "../node_modules/@react-navigation/bottom-tabs";
import { Ionicons } from "../node_modules/@expo/vector-icons";
// components
import ProfileScreen from "./ProfileScreen.js";
import PreferencesScreen from "./PreferencesScreen.js";
import CoursesScreen from "./CoursesScreen.js";
import Match from "./Match.js";
import Chat from "./Chat.js";

const Tab = createBottomTabNavigator();

function MainTabs(props) {

    const user = props.extraData
    
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Profile") {
                        iconName = focused ? "md-person" : "md-person";
                    } else if (route.name === "Preferences") {
                        iconName = focused ? "md-settings" : "md-settings";
                    } else if (route.name === "Match") {
                        iconName = focused ? "md-people" : "md-people";
                    } else if (route.name === "Chat") {
                        iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    
                    tabBarLabel: () => {return null}
                    
            })}

            // Icon change when clicking the tab
            tabBarOptions={{
                activeTintColor: "#ffffff",
                inactiveTintColor: "#ffffff",
                activeBackgroundColor: "#AFABF2",
                adaptive: true,
                tabStyle: {
                    margin: 10,
                    borderRadius: 20,
                    width: 84,
                    height: 50,
                },
                style: {
                    backgroundColor: "#6c63ff",
                }
            }}
        >
            <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ data: user }}/>
            <Tab.Screen name="Preferences" component={PreferencesScreen} initialParams={{ data: user }}/>
            <Tab.Screen name="Match" component={Match} initialParams={{ data: user }}/>
            <Tab.Screen name="Chat" component={Chat} initialParams={{ data: user }}/>
        </Tab.Navigator>
    );
}

export default MainTabs;