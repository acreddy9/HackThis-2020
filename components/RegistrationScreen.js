
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import auth from '../server/auth';
import styles from './styles';
import { FontAwesome } from '../node_modules/@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegistrationIllustration from "../assets/registration-illustration.svg";


export default function RegistrationScreen({navigation}, props) {
    var schools = [
        { id: 1, name: 'Purdue University'},
        { id: 2, name: 'University of Illinois Urbana-Champaign'}
    ]
    const [school, setSchool] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('LoginScreen')
    }

    const onRegisterPress = () => {
        auth.createNewUser({school}, email, password);
    }

    return (
         <View style={styles.container}> 
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always" nestedScrollEnabled={true} 
                /* this messes things up idk why: contentContainerStyle={styles.container} */ >
        
                <Text style={styles.appName}>Lorem</Text>
                <Text style={styles.subtitle}>Connect with classmates</Text>
                
                <RegistrationIllustration width={325} height={230} margin={20} alignSelf={"center"}/>                 
                
                <SearchableDropdown
                    onItemSelect={(item) => setSchool(item)}
                    containerStyle={styles.dropdownContainer}
                    itemStyles={styles.dropdownItem}
                    itemTextStyle={styles.dropdownItemText}
                    itemsContainerStyle={styles.dropdownItemContainer}
                    items={schools}
                    resetValue={false}
                    nestedScrollEnabled={true}
                    setSort={(item, searchedText)=> item.name.toLowerCase().startsWith(searchedText.toLowerCase())}
                    textInputProps={{
                        placeholder: "Select your school",
                        placeholderTextColor: "#aaaaaa",
                        underlineColorAndroid: "transparent",
                        style: styles.dropdownInputProps,
                    }}
                />
                <FontAwesome name="caret-down" size={24}  color="#6c63ff" style={{position: "absolute", top: 360, left: 300}}/>
                <TextInput
                    style={styles.input}
                    placeholder='School e-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={[styles.button, {marginTop: 20}]}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}> Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
          </View> 
    )
}