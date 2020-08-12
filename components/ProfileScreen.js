import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GreyHorizontalLine from './GreyHorizontalLine.js';

export default function ProfileScreen ({ route }) {
    const userID = route.params.data.id;

    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [bio, setBio] = useState('');

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
                
                <Text style={styles.profileSectionHeader}>Year</Text> 
                    {/* TODO: dropdown */}

                <Text style={styles.profileSectionHeader}>Major</Text> 
                    {/* TODO: dropdown */}
                
                <Text style={styles.profileSectionHeader}>Courses</Text> 
                    {/* TODO: dropdowns */}
                
                <Text style={styles.profileSectionHeader}>Mode of Communication</Text> 
                <Text style={styles.profileSectionText}>Rank in order of preference</Text> 
                    {/* TODO: dropdowns */}
                
                <Text style={styles.profileSectionHeader}>Availability</Text> 
                    {/* TODO: checkboxes */}

                <Text style={styles.profileSectionHeader}>Learning Styles</Text> 
                <Text style={styles.profileSectionText}>Rank in order of preference</Text> 
                    {/* TODO: dropdowns */}

                <Text style={styles.profileSectionHeader}>Interests</Text> 
                    {/* TODO: checkboxes */}
                
            </KeyboardAwareScrollView>
      </View>
    );
};