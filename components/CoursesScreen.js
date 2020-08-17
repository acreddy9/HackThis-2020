import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import styles from './styles';
import  Header  from './Header.js';
import CoursesIllustration from "../assets/courses-illustration.svg";
import {firebase} from '../server/config';

//var matchFeatureOn = false; // set to true to test course tile display
var courses = [
    { key: 1, courseName: "CS 200", professor: "Mark Renault" },
    { key: 2, courseName: "PSYCH 225", professor: "Allyson Bennett" },
    { key: 3, courseName: "MATH 233", professor: "Diane Tucker" },
    { key: 4, courseName: "STAT 515", professor: "Sara Dunn" }
]

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.courseTile, style]}>
      <Text style={styles.courseName}>{item.courseName}</Text>
      <Text style={styles.professor}>{item.professor}</Text>
    </TouchableOpacity>
);

export default function CoursesScreen({ route, navigation }) {
    const userID = route.params.data.id

    const [selectedCourse, setSelectedCourse] = useState('');
    const [matchFeatureOn, setMatchFeatureOn] = useState(false);

    // this is not working
    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('users')
        .doc(userID)
        .onSnapshot((snap) =>setMatchFeatureOn(snap.data().matchEnable))
        return () => {unsubscribe()}
    }, [firebase])

    const renderItem = ({item, index}) => {
        if (index==0) {
            return (
                <>
                <Text style={{padding:0}}></Text>
                <Item item={item} onPress={() => onCourseSelection(item.courseName)} />
                </>
            );
        } else{ 
            return (
                <Item item={item} onPress={() => onCourseSelection(item.courseName)} />
            );
        }
    }

    const onCourseSelection = (courseName) => {
        setSelectedCourse(courseName);
        navigation.navigate('MatchScreen', { selectedCourse: courseName })
    }

    const onPreferencesHyperlink = () => {
        navigation.navigate('Preferences')
    }

    if (matchFeatureOn) {
        return (
            <View style={styles.container}>
                <Header title={"My Courses"}/>
                <View>
                    <FlatList
                        data={courses}
                        renderItem={renderItem}
                        keyExtractor={(course) => course.key.toString()}
                        extraData={selectedCourse}
                        //ListEmptyComponent=
                    />
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Header title={"My Courses"}/>
                <Text style={styles.appName}>{"     "}</Text>
                <CoursesIllustration width={300} height={300} marginBottom={20} alignSelf={"center"}/> 
                <Text style={styles.footerText}>Turn on matching feature in <Text onPress={onPreferencesHyperlink} style={styles.footerLink}>Preferences</Text></Text>
                <Text style={styles.footerText}>to find new classmates!</Text>
            </View>
        )
    }
}
