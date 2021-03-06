import React, { useState, useRef, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import  Header  from './Header.js';
import styles from './styles';
import { Ionicons } from "../node_modules/@expo/vector-icons";

var firstMatches = [
    { key: 1, pic: require('../assets/nick-miller.png'), matchName: "Nick Miller", bio: "A bank is just a paper bag but with fancier walls.", percentage: 95 },
    { key: 2, pic: require('../assets/jessica-day.png'), matchName: "Jessica Day", bio: "I brake for birds, I rock a lot of polka dots, I have touched glitter in the last 24 hours.", percentage:92 },
    { key: 3, pic: require('../assets/schmidt.jpg'), matchName: "Schmidt", bio: "I can do anything I put my mind to. I once figured out Alyssa Milano’s phone number just by randomly choosing numbers.", percentage: 86 },
    { key: 4, pic: require('../assets/winston-bishop.jpg'), matchName: "Winston Bishop", bio: "If I were off my rocker, would I take a weekly selfie with my cat?", percentage: 82 }
]

var secondMatches = [
    { key: 1, pic: require('../assets/huey-kent.png'), matchName: "Mira Kent", bio: "Code. Eat. Sleep. Repeat.", percentage: 77 },
    { key: 2, pic: require('../assets/callum-cervantes.png'), matchName: "Jaxon Navarro", bio: "I'm a transfer student looking to make some friends!", percentage: 64 },
    { key: 3, pic: require('../assets/aminah-ratcliffe.png'), matchName: "Aria Ellis", bio: "Marvel enthusiast :-)", percentage: 49 },
    { key: 4, pic: require('../assets/charlie-logan.png'), matchName: "Will Hendrix", bio: "Gamma theta pi. Fav artist: Kanye", percentage: 28 }
]

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.courseTile, styles.matchTile]}>
        <Image style={{ 
                width: 65, 
                height: 65,
                borderRadius: 87, 
                position:'absolute', 
                top: 15, 
                left: 15 
            }} source={item.pic} />
        <Text style={[styles.courseName, {marginLeft: 75}]}>{item.matchName}</Text>
        <Text style={{fontSize: 40, color: "#aaa", position: "absolute", left: 280}}>|</Text>
        <Text numberOfLines={1} style={[styles.professor, {marginLeft: 75, width: 180}]}>{item.bio}</Text>
        <Text style={item.percentage>=70 ? styles.percent : (item.percentage>=30 ? [styles.percent, {color: "#F2CB60"}] : [styles.percent, {color: "#E36674"}])}> 
            {item.percentage}%
        </Text>
    </TouchableOpacity>
);

export default function MatchScreen({ route, navigation: { goBack } }) {
    const { selectedCourse } = route.params;
    const [matches, setMatches] = useState(firstMatches);
    const [selectedMatch, setSelectedMatch] = useState('');

    const onMatchMe = () => {
        if (matches==firstMatches) {
            setMatches(secondMatches);
        } else {
            setMatches(firstMatches);
        }
    }

    const renderItem = ({item}) => {
        return (
            <Item item={item} onPress={() => onMatchSelection(item.matchName)} />
        );
    }
    
    const onMatchSelection = (matchName) => {
        setSelectedMatch(matchName);
        navigation.navigate('MatchProfileScreen', { selectedMatch: matchName })
    }

    return (
        <View style={styles.container}>
            
            <Header title={selectedCourse}/>
            <TouchableOpacity style={styles.backButton} onPress={() => goBack()}>
                <Ionicons name="ios-arrow-back" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {marginTop: 20}]} onPress={() => onMatchMe()}>
                <Text style={styles.buttonTitle}>MATCH ME</Text>
            </TouchableOpacity>
            <Text style={styles.whiteSpace}>{"     "}</Text>
            <FlatList
                scrollEnabled={false}
                data={matches}
                renderItem={renderItem}
                keyExtractor={(match) => match.key.toString()}
                extraData={selectedMatch}
                //ListEmptyComponent=
            />
        </View>
    );
};