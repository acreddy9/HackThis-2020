import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import  Header  from './Header.js';
import styles from './styles';

const matches = [ // TODO: add profile pic as a prop for each match
    { matchName: "Charlie Logan", bio: "Gamma theta pi !!! Fav artist: Kanye", percentage: 95 },
    { matchName: "Aminah Ratcliffe", bio: "I like to pet eagles!", percentage: 62 },
    { matchName: "Huey Kent", bio: "I like to pet whales!", percentage: 44 },
    { matchName: "Nick Miller", bio: "A bank is just a paper bag but with fancier walls.", percentage: 28 }
]

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.courseTile, styles.matchTile]}>
      <Text style={styles.courseName}>{item.matchName}</Text>
      <Text numberOfLines={1} style={styles.professor}>{item.bio}</Text>
      <Text style={item.percentage>=70 ? styles.percentGreen : (item.percentage>=30 ? styles.percentYellow : styles.percentRed)}> 
          {item.percentage}%
        </Text>
    </TouchableOpacity>
);

export default function MatchScreen({ route }) {
    const { selectedCourse } = route.params;
    const [selectedMatch, setSelectedMatch] = useState('');

    const onMatchMe = () => {
    
    }

    const renderItem = ({item}) => {
        return (
            <Item item={item} onPress={() => onMatchSelection(item.matchName)} />
        );
    }
    
    const onMatchSelection = (matchName) => {
        setSelectedMatch(matchName);
    }

    return (
        <View style={styles.container}>
            <Header title={selectedCourse}/> 
            <TouchableOpacity style={styles.button} onPress={() => onMatchMe()}>
                <Text style={styles.buttonTitle}>MATCH ME</Text>
            </TouchableOpacity>
            <Text style={styles.whiteSpace}>{"     "}</Text>
            <FlatList
                scrollEnabled="false"
                data={matches}
                renderItem={renderItem}
                //keyExtractor={(course) => course.id}
                extraData={selectedMatch}
                //ListEmptyComponent=
            />
        </View>
    );
};