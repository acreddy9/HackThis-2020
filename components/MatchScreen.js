import React from 'react';
import { Text, View } from 'react-native';
import  Header  from './Header.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const onMatchMe = () => {
    
}

const MatchScreen = () => {
    return (
        <View>
            <Header title={"CS 200"}/> 
                {/* replace with courseSelected passed in */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => onMatchMe()}>
                <Text style={styles.buttonTitle}>MATCH ME</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MatchScreen;