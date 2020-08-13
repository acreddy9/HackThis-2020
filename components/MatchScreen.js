import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import  Header  from './Header.js';
import styles from './styles';

const matches = [ // TODO: add profile pic as a prop for each match
    { matchName: "Charlie Logan", bio: "Gamma theta pi !!! Fav artist: Kanye", percentage: "95%" },
    { matchName: "Callum Cervantes", bio: "I like to pet cats!", percentage: "76%" },
    { matchName: "Aminah Ratcliffe", bio: "I like to pet eagles!", percentage: "62%" },
    { matchName: "Huey Kent", bio: "I like to pet whales!", percentage: "44%" },
    { matchName: "Nick Miller", bio: "A bank is just a paper bag but with fancier walls.", percentage: "28%" }
]

const onMatchMe = () => {
    
}

export default function MatchScreen({ route }) {
    const { selectedCourse } = route.params;
    return (
        <View style={styles.container}>
            <Header title={selectedCourse}/>
             
            <TouchableOpacity style={styles.button} onPress={() => onMatchMe()}>
                <Text style={styles.buttonTitle}>MATCH ME</Text>
            </TouchableOpacity>
        </View>
    );
};