import React from 'react';
import { createStackNavigator } from '../node_modules/@react-navigation/stack';
import ChatScreen from "./ChatScreen.js";
import ChatRoom from "./ChatRoom.js";

const ChatStack = createStackNavigator();

export default function Chat() {
    return (
        <ChatStack.Navigator initialRouteName="ChatScreen" headerMode="none">
            <ChatStack.Screen name="ChatScreen" component={ChatScreen} />
            <ChatStack.Screen name="ChatRoom" component={ChatRoom} />
        </ChatStack.Navigator>
    )
}
