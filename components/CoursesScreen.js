import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import  Header  from './Header.js';
import CoursesIllustration from "../assets/courses-illustration.svg";
import { Ionicons } from "../node_modules/@expo/vector-icons";

const matchFeatureOn = false; // set to true to test course tile display
const courses = [
    { courseName: "CS 200", professor: "Mark Renault" },
    { courseName: "PSYCH 225", professor: "Allyson Bennett" },
    { courseName: "MATCH 233", professor: "Diane Tucker" },
    { courseName: "STATS 515", professor: "Sara Dunn" }
]

export default function CoursesScreen({ route, navigation }) {

    const [courseSelected, setCourseSelected] = useState('');

    const onCourseSelection = () => {
        // TODO: pass in courseSelected
        navigation.navigate('MatchScreen')
    }

    const onPreferencesHyperlink = () => {
        navigation.navigate('PreferencesScreen')
    }

    if (matchFeatureOn) {
        var i;
        for (var i = 0; i < courses.length; i++) {
            return (
                <View>
                    <Header title={"My Courses"}/>
                    <TouchableOpacity styles={styles.courseTile} onPress={onCourseSelection}>
                        <Text>{courses[i].courseName}</Text>
                        <Text>{courses[i].courseName}</Text>
                    <Ionicons name="ios-arrow-back" size={25}/>
                    </TouchableOpacity>
                </View>
            )
        }       
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
