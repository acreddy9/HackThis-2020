
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import auth from '../server/auth';
import styles from './styles';
import { FontAwesome } from '../node_modules/@expo/vector-icons';

export default function RegistrationScreen({navigation}, props) {
    var schools = [
        { id: 1, name: 'Purdue University'},
        { id: 2, name: 'University of Illinois Urbana-Champaign'}
    ]
    const [school, setSchool] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('LoginScreen')
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        auth.createNewUser(email, password);
    }

    return (
        <View style={styles.container}>            
            <Text style={styles.appName}>Lorem</Text>
            <Text style={styles.subtitle}>connect with classmates</Text>
            <Image
                style={styles.logo}
                source={require('../assets/books.png')} // TODO: change to logo
            />
            <SearchableDropdown
                onItemSelect={(school) => setSchool(school)}
                containerStyle={styles.dropdownContainer}
                itemStyles={styles.dropdownItem}
                itemTextStyle={styles.dropdownItem}
                itemsContainerStyle={styles.dropdownItemContainer}
                items={schools}
                resetValue={false}
                textInputProps={{
                        placeholder: "select your school",
                        placeholderTextColor: "#aaaaaa",
                        underlineColorAndroid: "transparent",
                        style: styles.dropdownInputProps,
                }}
                listProps={{nestedScrollEnabled: true}}
            />
            <FontAwesome name="caret-down" size={24} color="#3d3d3d" />
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
            <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    autoCapitalize="none"
                />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onRegisterPress()}>
                <Text style={styles.buttonTitle}>SIGN UP</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Already have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
            </View>
        </View>
    )
}