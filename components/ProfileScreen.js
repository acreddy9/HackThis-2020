import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, FlatList, } from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GreyHorizontalLine from './GreyHorizontalLine.js';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Checkbox from 'react-native-custom-checkbox';
import { State } from 'react-native-gesture-handler';
import {setUserProperties, setUserCourses, setProfilePicture} from '../server/userPrefs'
import { firebase } from '../server/config';
import { FontAwesome } from '../node_modules/@expo/vector-icons';

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

var coursesOffered = [
  { id: 1, name: 'CS 200' },
  { id: 2, name: 'MATH 233' },
  { id: 3, name: 'PSYCH 225' },
  { id: 4, name: 'STAT 515' },
]
const Item = ({ item, onPress, style }) => (
  <View style = {[styles.dropdownYear, {width: 168, margin: 6, marginLeft: 2, marginRight: 0, left: 15}]}>
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
          style={{position: "absolute", top: 5, left: 140}}
      />
  </View>
);

const renderItem = ({item}) => {
  return (
    <Item item={item}/>
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

export default function ProfileScreen ({ route }) {

    const userID = route.params.data.id;

    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [bio, setBio] = useState('');
    const [year, setYear] = useState('');
    const [major, setMajor] = useState('');
    const [coursesAdded, setCoursesAdded] = useState([
        { id: 1, courseName: '', prof: ''},
    ])

    useEffect(() => {
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
    }

    const imageSelected = selectedImage !== null;

    const renderAddedCourse = ({item}) => {
      return (
        <AddedCourse item={item} />
      )
    }

    const onAddCourse = () => {
      const idx = coursesAdded.length + 1;
      var newCoursesAdded = [...coursesAdded, {id : idx, courseName: '', prof: ''}];
      setCoursesAdded(newCoursesAdded);
  }

    return (
        <View style={[styles.container, {marginBottom: -950}]}>
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

                {/* Tap to enter name, pronouns, bio next to their section headers  */}
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
                

                {/* Add courses and prfoessors */}
                <Text style={[styles.profileSectionHeader, {bottom: 10}]}>Courses</Text> 
                <TouchableOpacity onPress={onAddCourse}>
                  <Text style={styles.addacourse_text}>+ Add a course</Text>
                </TouchableOpacity>

                <View>
                    <FlatList
                        data={coursesAdded}
                        renderItem={renderAddedCourse}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                {/* Rank learning style */}
                <Text style={[styles.profileSectionHeader, {marginBottom: -3}]}>Learning style</Text> 
                <Text style={[styles.profileSectionText, {marginLeft: 20}]}>Rank in order of preference</Text>
               
                <View style={styles.SearchableDroppie_learn1}>
                    <SearchableDropdown
                    onTextChange={text => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={item => alert(JSON.stringify(item))}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={{ padding: 5 }}
                    //suggestion container style
                    textInputStyle={{
                      //inserted text style
                      padding: 7,
                      borderWidth: 1,
                      borderColor: '#626262',
                      backgroundColor: '#FFF',
                      borderRadius: 7
                    }}
                    itemStyle={{
                      //single dropdown item style
                      padding: 7,
                      marginTop: 0,
                      backgroundColor: '#FFF',
                      borderColor: '#626262',
                      
                      
                      
                    }}
                    itemTextStyle={{
                      //single dropdown item's text style
                      color: '#222',
                    }}
                    itemsContainerStyle={{
                      //items container style you can pass maxHeight
                      //to restrict the items dropdown hieght
                      maxHeight: '80%',
                      borderWidth: 0.2,
                      borderRadius: 7
                    }}
                    items={Majors}
                    //mapping of item array
                    defaultIndex={2}
                    //default selected item index
                    placeholder="Your major"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                  />
        
                    </View>

                    <View style={styles.SearchableDroppie_learn2}>
                    <SearchableDropdown
                    onTextChange={text => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={item => alert(JSON.stringify(item))}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={{ padding: 5 }}
                    //suggestion container style
                    textInputStyle={{
                      //inserted text style
                      padding: 7,
                      borderWidth: 1,
                      borderColor: '#626262',
                      backgroundColor: '#FFF',
                      borderRadius: 7
                    }}
                    itemStyle={{
                      //single dropdown item style
                      padding: 7,
                      marginTop: 0,
                      backgroundColor: '#FFF',
                      borderColor: '#626262',
                      
                      
                      
                    }}
                    itemTextStyle={{
                      //single dropdown item's text style
                      color: '#222',
                    }}
                    itemsContainerStyle={{
                      //items container style you can pass maxHeight
                      //to restrict the items dropdown hieght
                      maxHeight: '80%',
                      borderWidth: 0.2,
                      borderRadius: 7
                    }}
                    items={Majors}
                    //mapping of item array
                    defaultIndex={2}
                    //default selected item index
                    placeholder="Your major"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                  />
        
                    </View>

                    <View style={styles.SearchableDroppie_learn3}>
                    <SearchableDropdown
                    onTextChange={text => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={item => alert(JSON.stringify(item))}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={{ padding: 5 }}
                    //suggestion container style
                    textInputStyle={{
                      //inserted text style
                      padding: 7,
                      borderWidth: 1,
                      borderColor: '#626262',
                      backgroundColor: '#FFF',
                      borderRadius: 7
                    }}
                    itemStyle={{
                      //single dropdown item style
                      padding: 7,
                      marginTop: 0,
                      backgroundColor: '#FFF',
                      borderColor: '#626262',
                      
                      
                      
                    }}
                    itemTextStyle={{
                      //single dropdown item's text style
                      color: '#222',
                    }}
                    itemsContainerStyle={{
                      //items container style you can pass maxHeight
                      //to restrict the items dropdown hieght
                      maxHeight: '80%',
                      borderWidth: 0.2,
                      borderRadius: 7
                    }}
                    items={Majors}
                    //mapping of item array
                    defaultIndex={2}
                    //default selected item index
                    placeholder="Your major"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                  />
        
                    </View>






                {/* Rank mode of communication */}
                <Text style={{padding:30}}></Text>


                 <View style= {styles.days} >
                 <Text style={styles.dayText}>S</Text> 
                 <Text style={styles.dayText}>M</Text> 
                 <Text style={styles.dayText}>T</Text> 
                 <Text style={styles.dayText}>W</Text> 
                 <Text style={styles.dayText}>Th</Text> 
                 <Text style={styles.dayText}>F</Text> 
                 <Text style={styles.dayText}>S</Text> 
                 </View>


                 

                    
                <View style={styles.av_text}>
                <Text style={styles.profileSectionHeader}>Availability</Text> 
                </View>
                
                <View style= {styles.avBottomText1}>
                <Text style={styles.profileSectionText}>Morning</Text>
                </View>

                <View style ={styles.avBottomText2}>
                <Text style={styles.profileSectionText}>After{"\n"}-noon</Text>
                </View>

                <View style ={styles.avBottomText3}>
                <Text style={styles.profileSectionText}>Evening</Text>
                </View>

                    <View style={styles.checkboxGrid1}>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    </View>

                    <View style={styles.checkboxGrid2}>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>




                    </View>

                    <View style={styles.checkboxGrid3}>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    </View>

                    

                    
                    
                    
                <View style={{position:"relative", bottom:230}}>
                <Text style={styles.profileSectionHeader}>Interests</Text>
                </View>

                <View style= {styles.interests1} >
                 <Text style={styles.intText}>Art</Text> 
                 <Text style={styles.intText}>Astrology</Text> 
                 <Text style={styles.intText}>Baking/Cooking</Text> 
                 <Text style={styles.intText}>Dance</Text> 
                 <Text style={styles.intText}>Fitness</Text> 
                 <Text style={styles.intText}>Movies/TV</Text> 
                 </View>
                  
                  <View style={styles.intCheckboxGrid1}>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    

                    </View>





                    <View style= {styles.interests2} >
                 <Text style={styles.intText}>Music</Text> 
                 <Text style={styles.intText}>Outdoors</Text> 
                 <Text style={styles.intText}>Politics</Text> 
                 <Text style={styles.intText}>Reading</Text> 
                 <Text style={styles.intText}>Sports</Text> 
                 <Text style={styles.intText}>Video Games</Text> 
                 </View>
                  
                  <View style={styles.intCheckboxGrid2}>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginBottom:20}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    

                    </View>




                
                <View style={styles.scButton}>
                <TouchableOpacity
                  
                  style={styles.button}
                  onPress={() => saveChanges()}>
                  <Text style={styles.buttonTitle}>SAVE CHANGES</Text>
                </TouchableOpacity>
                </View>

            
                
            </KeyboardAwareScrollView>
      </View>
      
    );
};