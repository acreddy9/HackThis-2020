import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GreyHorizontalLine from './GreyHorizontalLine.js';
import Checkbox from 'react-native-custom-checkbox';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {setUserName, setUserBio, setUserMajor, setUserYear} from '../server/userPrefs'

var Years = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'Freshman' },
    { id: 2, name: 'Sophomore' },
    { id: 3, name: 'Junior' },
    { id: 4, name: 'Senior' },
    
  ];

  var Majors = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'Computer Science' },
    { id: 2, name: 'Economics' },
    { id: 3, name: 'Mathematics' },
    { id: 4, name: 'Nursing' },
    { id: 4, name: 'Business' },
    { id: 4, name: 'Music' },
    { id: 4, name: 'Computer Engineering' },
    
  ];
  

function ProfileScreen ({ route }) {
    const userID = route.params.data.id;

    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [bio, setBio] = useState('');
    const [major, setMajor] = useState('');
    const [year, setYear] = useState('');

   
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
        setUserName(name)
        setUserBio(bio)
        setUserMajor(major)
        setUserYear(year)
    }

    const imageSelected = selectedImage !== null;

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                {/* <Text>Hi, {userID}.</Text> */}
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
                    style={styles.profilePronounsInput}
                    onChangeText={(text) => setPronouns(text)}
                    value={pronouns}
                    autoCapitalize="none"
                />
                <GreyHorizontalLine />
                <Text style={styles.profileSectionHeader}>Bio</Text>
                <TextInput
                    style={styles.profileBioInput}
                    onChangeText={(text) => setBio(text)}
                    value={bio}
                    autoCapitalize="none"
                />
                <GreyHorizontalLine />
                <View style = {styles.year_text}>
                <Text style={styles.profileSectionHeader}>Year</Text> 
                </View>
                    
                    <View style = {styles.SearchableDroppie_year}>
                    <SearchableDropdown 
                    
                    onTextChange={text => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={item => setYear(item.name)}
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
                    items={Years}
                    //mapping of item array
                    //defaultIndex={0}
                    //default selected item index
                    placeholder="Your academic year"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                  />
                  </View>
        
                    


   
                  <View style = {styles.major_text}>
                <Text style={styles.profileSectionHeader}>Major</Text> 
                
                </View>

                    
                    <View style={styles.SearchableDroppie_major}>
                    <SearchableDropdown
                    onTextChange={text => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={item => setMajor(item.name)}
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
                    //defaultIndex={2}
                    //default selected item index
                    placeholder="Your major"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                  />
        
                    </View>
                
                <View style={styles.courses_text}>
                <Text style={styles.profileSectionHeader}>Courses</Text> 
                <TouchableOpacity>
                  <Text style={styles.addacourse_text}>+ Add a course</Text>
                </TouchableOpacity>
                </View>


                <View style={styles.SearchableDroppie_course1}>
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


                    <View style={styles.SearchableDroppie_course2}>
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

                    <View style={styles.SearchableDroppie_course3}>
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

                    <View style={styles.SearchableDroppie_course4}>
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

                <View style={styles.learnstyle_text}>
                <Text style={styles.profileSectionHeader}>Learning style</Text> 
                <Text style={styles.profileSectionText}>Rank in order of preference</Text>
               
                </View>
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









                <View style ={styles.comm_text}>
                <Text style={styles.profileSectionHeader}>Mode of Communication</Text> 
                <Text style={styles.profileSectionText}>Rank in order of preference</Text> 
                </View>
                    
                
                <Text style={styles.profileSectionHeader}>Availability</Text> 
                    {/* TODO: checkboxes */
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', borderColor: '#707070', borderWidth: 1, margin: 10, borderRadius: 5}}
                    />
                    
                    }

                <Text style={styles.profileSectionHeader}>Learning Styles</Text> 
                <Text style={styles.profileSectionText}>Rank in order of preference</Text> 
                    {/* TODO: dropdowns */}

                <Text style={styles.profileSectionHeader}>Interests</Text>

                <Checkbox
                checked={true}
                style={{backgroundColor: '#FFF', color:'#6C63FF', borderColor: '#707070', borderWidth: 1, margin: 10, borderRadius: 5}}
                />

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => saveChanges()}>
                  <Text style={styles.buttonTitle}>Save Changes</Text>
                </TouchableOpacity>

            
                
            </KeyboardAwareScrollView>
      </View>
    );
};
export default ProfileScreen;