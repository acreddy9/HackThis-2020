import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, FlatList, } from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GreyHorizontalLine from './GreyHorizontalLine.js';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Checkbox from 'react-native-custom-checkbox';
import {setUserProperties, setUserCourses, setProfilePicture, getUniversityCourses} from '../server/userPrefs'
import { firebase } from '../server/config';
import { FontAwesome, MaterialCommunityIcons } from '../node_modules/@expo/vector-icons';

const Years = [
    { id: 1, name: 'Freshman' },
    { id: 2, name: 'Sophomore' },
    { id: 3, name: 'Junior' },
    { id: 4, name: 'Senior' }
];

var Majors = [
  { id: 1, name: 'Computer Science' },
  { id: 2, name: 'Economics' },
  { id: 3, name: 'Mathematics' },
  { id: 4, name: 'Nursing' },
  { id: 5, name: 'Business' },
  { id: 6, name: 'Music' },
  { id: 7, name: 'Computer Engineering' },
];

// Vars and methods for adding courses
// var coursesOffered = [
//   { id: 1, name: 'CS 200' },
//   { id: 2, name: 'MATH 233' },
//   { id: 3, name: 'PSYCH 225' },
//   { id: 4, name: 'STAT 515' },
// ]

var coursesOffered = []

const CourseProfItem = ({ item }) => (
  <View style = {{width: 168, marginRight: 2, marginBottom: 10}}>
      <SearchableDropdown 
          //onItemSelect={item => setYear(item.name)}
          itemsContainerStyle={styles.dropdownYearItemContainer}
          itemStyle={styles.dropdownYearItem}
          itemTextStyle={styles.dropdownItemText}
          textInputStyle={styles.dropdownYearTextInput}
          items={coursesOffered}
          resetValue={false}
          placeholder={item.id==1 ? "Select a course" : "Select a professor"}
          textInputProps={{
              placeholderTextColor: "#aaa",
              underlineColorAndroid: "transparent",
          }}
      />
      <FontAwesome 
          name="caret-down"
          size={24}
          color="#6c63ff"
          style={{position: "absolute", top: 5, right: 10}}
      />
  </View>
);
const renderItem = ({item}) => {
  return (
    <CourseProfItem item={item}/>
  )
}
const AddedCourse = ({ item, onPress, style }) => (
  <>
  <FlatList
      horizontal={true}
      data={[{id: 1}, {id: 2}]}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
  />
  </>
);

// Vars and methods for learning style and mode of communication
const LearningStyles = [
  { id: 1, name: 'One-on-one' },
  { id: 2, name: 'Small group (3-5)' },
  { id: 3, name: 'Large group (6+)' }
]
const ModesOfCommunication = [
  { id: 1, name: 'Message' },
  { id: 2, name: 'Call' },
  { id: 3, name: 'Videochat' }
]
const RankItem = ({ item }) => (
  <View horizontal={false}>
  <Text style={item.id==1 ? [styles.profileSectionHeader, styles.learningTitle] : [styles.profileSectionHeader, styles.commTitle]}>
      {item.id==1 ? "Learning style" : "Communication style"}
  </Text> 
  {/*
  <Text style={item.id==1 ? [styles.profileSectionText, styles.learningSubtitle] : [styles.profileSectionText, styles.commSubtitle]}>
      Preference ranking
  </Text>
  */}
  <View style = {item.id==1 ? [styles.dropdownYear, styles.learningDropdown] : [styles.dropdownYear, styles.commDropdown]}>
      <SearchableDropdown // RANK 1
          //onItemSelect={item => setYear(item.name)}
          onItemSelect={(item) => {}}
          itemsContainerStyle={styles.dropdownYearItemContainer}
          itemStyle={styles.dropdownYearItem}
          itemTextStyle={styles.dropdownItemText}
          textInputStyle={styles.dropdownYearTextInput}
          items={item.id==1 ? LearningStyles : ModesOfCommunication}
          resetValue={false}
          placeholder={item.id==1 ? "Select a style" : "Select a mode"}
          textInputProps={{
              placeholderTextColor: "#aaa",
              underlineColorAndroid: "transparent",
          }}
      />
      <FontAwesome 
          name="caret-down"
          size={24}
          color="#6c63ff"
          style={{position: "absolute", top: 5, right: 10}}
      />
  </View>
  <View style = {item.id==1 ? [styles.dropdownYear, styles.learningDropdown] : [styles.dropdownYear, styles.commDropdown]}>
      <SearchableDropdown // RANK 2
          //onItemSelect={item => setYear(item.name)}
          onItemSelect={(item) => {}}
          itemsContainerStyle={styles.dropdownYearItemContainer}
          itemStyle={styles.dropdownYearItem}
          itemTextStyle={styles.dropdownItemText}
          textInputStyle={styles.dropdownYearTextInput}
          items={item.id==1 ? LearningStyles : ModesOfCommunication}
          resetValue={false}
          placeholder={item.id==1 ? "Select a style" : "Select a mode"}
          textInputProps={{
              placeholderTextColor: "#aaa",
              underlineColorAndroid: "transparent",
          }}
      />
      <FontAwesome 
          name="caret-down"
          size={24}
          color="#6c63ff"
          style={{position: "absolute", top: 5, right: 10}}
      />
  </View>
  <View style = {item.id==1 ? [styles.dropdownYear, styles.learningDropdown] : [styles.dropdownYear, styles.commDropdown]}>
      <SearchableDropdown // RANK 3
          //onItemSelect={item => setYear(item.name)}
          onItemSelect={(item) => {}}
          itemsContainerStyle={styles.dropdownYearItemContainer}
          itemStyle={styles.dropdownYearItem}
          itemTextStyle={styles.dropdownItemText}
          textInputStyle={styles.dropdownYearTextInput}
          items={item.id==1 ? LearningStyles : ModesOfCommunication}
          resetValue={false}
          placeholder={item.id==1 ? "Select a style" : "Select a mode"}
          textInputProps={{
              placeholderTextColor: "#aaa",
              underlineColorAndroid: "transparent",
          }}
      />
      <FontAwesome 
          name="caret-down"
          size={24}
          color="#6c63ff"
          style={{position: "absolute", top: 5, left: 125}}
      />
  </View>
  </View>
);
const renderRank = ({item}) => {
  if (item.id == 2) {
    return (
      <View horizontal={false} style={{padding: 5, left: 18, top: 48}}>
      <MaterialCommunityIcons name="numeric-1-circle-outline" size={24} color={"#6c63ff"} style={{marginBottom: 15}}/>
      <MaterialCommunityIcons name="numeric-2-circle-outline" size={24} color={"#6c63ff"} style={{marginBottom: 15}}/>
      <MaterialCommunityIcons name="numeric-3-circle-outline" size={24} color={"#6c63ff"} style={{marginBottom: 10}}/>
      </View>
    );
  } else {
    return (
      <RankItem item={item}/>
    );
  }
}

// Vars and methods for availability
const calendar = [
  {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8},
  {id: 9}, {id: 10}, {id: 11}, {id: 12}, {id: 13}, {id: 14}, {id: 15}, {id: 16},
  {id: 17}, {id: 18}, {id: 19}, {id: 20}, {id: 21}, {id: 22}, {id: 23}, {id: 24}, 
  {id: 25}, {id: 26}, {id: 27}, {id: 28}, {id: 29}, {id: 30}, {id: 31}, {id: 32} 
]
var day;
var timeOfDay;
const renderCal = ({ item, index }) => {
  switch (index) {
    case 0: return;
    case 1: day = "S"; break;
    case 2: day = "M"; break;
    case 3: day = "T"; break;
    case 4: day = "W"; break;
    case 5: day = "R"; break;
    case 6: day = "F"; break;
    case 7: day = "S"; break;
    case 8: timeOfDay = "Morning"; break;
    case 16: timeOfDay = "After -noon"; break;
    case 24: timeOfDay = "Evening"; break;
  }

  if (index == 1) {
    return (
      <Text style={[styles.profileSectionText, {paddingLeft: 68, marginRight: 3}]}>{day}</Text>
    );
  } else if (index <= 7) {
    return (
      <Text style={[styles.profileSectionText, {marginRight: 3}]}>{day}</Text>
    );
  } else if (index == 8 || index == 24) {
    return (
      <Text style={[styles.profileSectionText, {width: 55, marginTop: 8}]}>{timeOfDay}</Text>
    );
  } else if (index == 16) {
    return (
      <Text style={[styles.profileSectionText, {width: 55, marginTop: 5}]}>{timeOfDay}</Text>
    );
  } else {
    return (
      <View style={{ marginRight:13, margin:5 }}>
        <Checkbox
        checked={false}
        style={{backgroundColor: '#FFF', color:'#6C63FF', 
        borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
      </View>
    );
  }
}

// Vars and methods for interests
const interests = [
  {id: 1}, {id: 2}, {id: 3}, {id: 4},
  {id: 5}, {id: 6}, {id: 7}, {id: 8},
  {id: 9}, {id: 10}, {id: 11}, {id: 12},
  {id: 13}, {id: 14}, {id: 15}, {id: 16},
  {id: 17}, {id: 18}, {id: 19}, {id: 20},
  {id: 21}, {id: 22}, {id: 23}, {id: 24}
]
var interest;
const renderInterest = ({ item, index }) => {
  switch (index) {
    case 1: interest = "Art"; break;
    case 3: interest = "Music"; break;
    case 5: interest = "Astrology"; break;
    case 7: interest = "Outdoors"; break;
    case 9: interest = "Baking/Cooking"; break;
    case 11: interest = "Politics"; break;
    case 13: interest = "Dance"; break;
    case 15: interest = "Reading"; break;
    case 17: interest = "Fitness"; break;
    case 19: interest = "Sports"; break;
    case 21: interest = "Movies/TV"; break;
    case 23: interest = "Video Games"; break;
  }

  if (index % 2 == 0) {
    return (
      <View style={{ marginRight: 13, margin: 5 }}>
        <Checkbox
        checked={false}
        style={{backgroundColor: '#FFF', color:'#6C63FF', 
        borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
      </View>
    );
  } else {
    return (
      <Text style={[styles.profileSectionText, {marginLeft: 0, marginTop: 8, width: 150}]}>{interest}</Text>
    )
  }
}



export default function ProfileScreen ({ route }) {

    const userID = route.params.data.id;
    const userSchool = route.params.data.school;

    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [bio, setBio] = useState('');
    const [year, setYear] = useState('');
    const [major, setMajor] = useState('');
    const [coursesAdded, setCoursesAdded] = useState([
        { id: 1, courseName: '', prof: ''},
    ])
    
    const [changesSaved, setChangesSaved] = useState(false);

    useEffect(() => {
      coursesOffered = getUniversityCourses(userSchool);
      const usersRef = firebase.firestore().collection('users');
      usersRef.doc(userID).get().then((document) => {
        const userData = document.data()
        if(userData.name){
          setName(userData.name)
        }
        if(userData.bio) {
          setBio(userData.bio)
        }
        if(userData.pronouns){
          setPronouns(userData.pronouns)
        }
        // if(userData.profile_pic){
        //   setSelectedImage(userData.profile_pic)
        // }
      })
    });

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage({ localUri: pickerResult.uri });
    };

    const saveChanges = () => {
      const user = {
        name,
        pronouns,
        major,
        bio,
        year
      }
      setUserProperties(userID, user)
      setChangesSaved(true);
    }

    const imageSelected = selectedImage !== null;

    const renderAddedCourse = ({item}) => {
      return (
        <AddedCourse item={item} />
      )
    }
    const onAddCourse = () => {
      const idx = coursesAdded.length + 1;
      var newCoursesAdded = [...coursesAdded, {id: idx, courseName: '', prof: ''}];
      setCoursesAdded(newCoursesAdded);
    }

    return ( // {marginBottom: -950}
        <View style={[styles.container, ]}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">

                {/* Press profile picture to edit */}
                <TouchableOpacity onPress={openImagePickerAsync}>
                    {imageSelected 
                    ? <Image 
                        source={{ uri: selectedImage.localUri }}
                        style={styles.profilePic}
                    /> : <Image
                        source={require('../assets/default-profile-pic.jpg')}
                        style={styles.profilePic}
                    />
                    }
                </TouchableOpacity>

                {/* Tap to enter name, pronouns, and bio  */}
                <GreyHorizontalLine />
                <Text style={styles.profileSectionHeader}>Name</Text>
                <TextInput
                    style={styles.profileNameInput}
                    onChangeText={(text) => setName(text)}
                    value={name}
                    autoCapitalize="none"
                />
                <GreyHorizontalLine />
                <Text style={styles.profileSectionHeader}>Pronouns</Text>
                <TextInput
                    style={[styles.profileNameInput, {left: 103, top: 177}]}
                    onChangeText={(text) => setPronouns(text)}
                    value={pronouns}
                    autoCapitalize="none"
                />
                <GreyHorizontalLine />
                <Text style={styles.profileSectionHeader}>Bio</Text>
                <TextInput
                    style={[styles.profileNameInput, {left: 60, top: 214}]}
                    onChangeText={(text) => setBio(text)}
                    value={bio}
                    autoCapitalize="none"
                />
                <GreyHorizontalLine />


                {/* Select academic year from dropdown */}
                <Text style={[styles.profileSectionHeader, {top: 30}]}>Year</Text> 
                <View style = {styles.dropdownYear}>
                    <SearchableDropdown 
                        onItemSelect={item => setYear(item.name)}
                        //containerStyle={styles.dropdownContainer}
                        itemsContainerStyle={styles.dropdownYearItemContainer}
                        itemStyle={styles.dropdownYearItem}
                        itemTextStyle={styles.dropdownItemText}
                        textInputStyle={styles.dropdownYearTextInput}
                        items={Years}
                        resetValue={false}
                        textInputProps={{
                            placeholder: "Select your year in school",
                            placeholderTextColor: "#aaa",
                            underlineColorAndroid: "transparent",
                            //style: styles.dropdownInputProps,
                        }}
                    />
                    <FontAwesome 
                        name="caret-down"
                        size={24}
                        color="#6c63ff"
                        style={{position: "absolute", top: 5, left: 250}}
                    />
                </View>
        
                {/* Select major from dropdown */}
                <Text style={[styles.profileSectionHeader, {bottom:-5}]}>Major</Text> 
                <View style={[styles.dropdownYear, {bottom: 30}]}>
                    <SearchableDropdown 
                        onItemSelect={item => setMajor(item.name)}
                        itemsContainerStyle={styles.dropdownYearItemContainer}
                        itemStyle={styles.dropdownYearItem}
                        itemTextStyle={styles.dropdownItemText}
                        textInputStyle={styles.dropdownYearTextInput}
                        items={Majors}
                        resetValue={false}
                        textInputProps={{
                            placeholder: "Select your major",
                            placeholderTextColor: "#aaa",
                            underlineColorAndroid: "transparent",
                        }}
                        nestedScrollEnabled={true}
                    />
                    <FontAwesome 
                        name="caret-down"
                        size={24}
                        color="#6c63ff"
                        style={{position: "absolute", top: 5, left: 250}}
                    />
                </View>
                

                {/* Add courses and professors */}
                <Text style={[styles.profileSectionHeader, {bottom: 10}]}>Courses</Text> 
                <TouchableOpacity onPress={onAddCourse}>
                  <Text style={styles.addACourse}>+ Add a course</Text>
                </TouchableOpacity>
                <View style={{paddingLeft: 18}}>
                    <FlatList
                        //contentContainerStyle={{alignItems: "center"}} // this hides added courses
                        data={coursesAdded}
                        renderItem={renderAddedCourse}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                {/* Rank learning style and mode of communication */}
                <View>
                    <FlatList
                        horizontal={true}
                        data={[{id: 1}, {id: 2}, {id: 3}]}
                        renderItem={renderRank}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                

                {/* Mark weekly availability */}
                <Text style={[styles.profileSectionHeader, {marginTop: 25}]}>Availability</Text> 
                <View style={{left: -10}}>
                    <FlatList
                        data={calendar}
                        renderItem={renderCal}
                        keyExtractor={(item) => item.id}
                        numColumns={8}
                    />
                </View>

                {/* Mark interests */}
                <Text style={[styles.profileSectionHeader, {marginTop: 25}]}>Interests</Text>
                <View style={{left:30}}>
                    <FlatList
                        data={interests}
                        renderItem={renderInterest}
                        keyExtractor={(item) => item.id}
                        numColumns={4}
                    />
                </View>

                {/* Save edits to profile */} 
                <TouchableOpacity
                  style={[styles.button, {marginTop: 25}]}
                  onPress={() => saveChanges()}>
                  <Text style={styles.buttonTitle}>SAVE CHANGES</Text>
                </TouchableOpacity>
                <Text style={changesSaved ? [styles.profileSectionText, {marginLeft: 0, textAlign: "center"}] : {color: "#fff"}}>
                  Changes have been saved.
                </Text>
                
                <Text style={{padding:10}}></Text>
                      
            </KeyboardAwareScrollView>
      </View>
      
    );
};