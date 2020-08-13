import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '../node_modules/@react-navigation/stack';
import CoursesScreen from "./CoursesScreen.js";
import MatchScreen from "./MatchScreen.js";
import MatchProfileScreen from "./MatchProfileScreen.js";

const MatchStack = createStackNavigator();

export default function Match() {
    return (
        <MatchStack.Navigator initialRouteName="CoursesScreen" headerMode="none">
            <MatchStack.Screen name="CoursesScreen" component={CoursesScreen} />
            <MatchStack.Screen name="MatchScreen" component={MatchScreen} />
            <MatchStack.Screen name="MatchProfileScreen" component={MatchProfileScreen} />
        </MatchStack.Navigator>
    )
}
