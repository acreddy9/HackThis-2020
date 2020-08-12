import React, { useState } from 'react'
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import styles from './styles';
import  Header  from './Header.js';
import CoursesIllustration from "../assets/courses-illustration.svg";

const matchFeatureOn = true; // set to true to test course tile display
const courses = [
    { courseName: "CS 200", professor: "Mark Renault" },
    { courseName: "PSYCH 225", professor: "Allyson Bennett" },
    { courseName: "MATCH 233", professor: "Diane Tucker" },
    { courseName: "STATS 515", professor: "Sara Dunn" }
]

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.courseTile, style]}>
      <Text style={styles.courseName}>{item.courseName}</Text>
      <Text style={styles.professor}>{item.professor}</Text>
    </TouchableOpacity>
);

export default function CoursesScreen({ navigation }) {

    const [selectedCourse, setSelectedCourse] = useState('');

    const renderItem = ({item}) => {
        return (
            <Item
                item={item}
                onPress={() => onCourseSelection(item.courseName)}
            />
        );
    }

    const onCourseSelection = (courseName) => {
        setSelectedCourse(courseName)
        navigation.navigate('MatchScreen', {selectedCourse})
    }

    const onPreferencesHyperlink = () => {
        navigation.navigate('Preferences')
    }

    if (matchFeatureOn) {
        return (
            <View style={styles.container}>
                <Header title={"My Courses"}/>
                <FlatList
                    data={courses}
                    renderItem={renderItem}
                    //keyExtractor={(course) => course.id}
                    extraData={selectedCourse}
                    //ListEmptyComponent=
                />
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
