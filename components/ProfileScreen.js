import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import  Header  from './Header.js';
// import ImagePicker from '../expo-image-picker'

function ProfileScreen ({ route }) {
    const userID = route.params.data.id
    /*
    const [selectedImage, setSelectedImage] = React.useState(null);

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

    if (selectedImage !== null) {
        return (
            <View style={styles.container}>
                <Image
                source={{ uri: selectedImage.localUri }}
                style={styles.thumbnail}
                />
            </View>
        );
    }
*/
    return (
        <View>
            <Header title="Profile"/>
            <Text>Hi, {userID}.</Text>
        </View>
    );
};

export default ProfileScreen;