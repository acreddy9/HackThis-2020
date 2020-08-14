import React from 'react'
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '../node_modules/@react-navigation/stack';
import CoursesScreen from "./CoursesScreen.js";
import MatchScreen from "./MatchScreen.js";
import MatchProfileScreen from "./MatchProfileScreen.js";
import ChatRoom from "./ChatRoom.js"
const MatchStack = createStackNavigator();

export default function Match({route}) {
    const user = route.params.data

    return (
        <MatchStack.Navigator initialRouteName="CoursesScreen" headerMode="none">
            <MatchStack.Screen name="CoursesScreen" component={CoursesScreen} initialParams={{data: user}}/>
            <MatchStack.Screen name="MatchScreen" component={MatchScreen} />
            <MatchStack.Screen name="MatchProfileScreen" component={MatchProfileScreen} />
            <MatchStack.Screen name="ChatRoom" component={ChatRoom} />
        </MatchStack.Navigator>
    )
}
