import React from "react";
// navigation
import { createBottomTabNavigator } from "../node_modules/@react-navigation/bottom-tabs";
import { Ionicons } from "../node_modules/@expo/vector-icons";
// components
import ProfileScreen from "./ProfileScreen.js";
import SettingsScreen from "./SettingsScreen.js";
import MatchScreen from "./MatchScreen.js";
import ChatScreen from "./ChatScreen.js";

const Tab = createBottomTabNavigator();

function MainTabs(props) {

    const user = props.extraData
    
    return (
       // <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Profile") {
                            iconName = focused ? "md-person" : "md-person";
                        } else if (route.name === "Settings") {
                            iconName = focused ? "md-settings" : "md-settings";
                        } else if (route.name === "Match") {
                            iconName = focused ? "md-heart" : "md-heart";
                        } else if (route.name === "Chat") {
                            iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles";
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                     },
                     
                     tabBarLabel: () => {return null}
                     
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
                <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ data: user }}/>
                <Tab.Screen name="Settings" component={SettingsScreen} initialParams={{ data: user }}/>
                <Tab.Screen name="Match" component={MatchScreen} initialParams={{ data: user }}/>
                <Tab.Screen name="Chat" component={ChatScreen} initialParams={{ data: user }}/>
            </Tab.Navigator>
        // </NavigationContainer> 
    );
}

export default MainTabs;