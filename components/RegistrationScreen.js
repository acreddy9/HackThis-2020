
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SearchableDropdown from 'react-native-searchable-dropdown';
import auth from '../server/auth'
import styles from './styles';

export default function RegistrationScreen({navigation}) {
    var schools = [
        { id: 1, name: 'Purdue'},
        { id: 2, name: 'University of Illinois Urbana-Champaign'}
    ]
    const [school, setSchool] = useState('')
    const [fullName, setFullName] = useState('')
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
        auth.createNewUser(fullName, email, password);
    }

    return (
        <View style={styles.container}>
            {/* error if you have FlatList nested in a ScrollView
                <KeyboardAwareScrollView 
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
            */}             
                <Text style={styles.appName}>lorem</Text>
                <Text style={styles.subtitle}>connect with classmates</Text>
                <Image
                    style={styles.illustration}
                    // source={require('../../../assets/icon.png')}
                />
                <SearchableDropdown
                    setSort={(item, searchedText)=> item.name.toLowerCase().startsWith(searchedText.toLowerCase())}
                    onSchoolSelect={(school) => setSchool(school)}
                    containerStyle={styles.dropdownContainer}
                    itemStyles={styles.dropdownItem}
                    itemTextStyle={styles.dropdownItem}
                    itemsContainerStyle={styles.dropdownItemContainer}
                    resetValue={false}
                    textInputProps={{
                            placeholder: "select your school",
                            placeholderTextColor: "#aaaaaa",
                            underlineColorAndroid: "transparent",
                            style: styles.dropdownInputProps,
                            onTextChange: text => alert(text)
                    }}
                    listProps={{nestedScrollEnabled: true}}
                />
                <TextInput
                    style={styles.input}
                    placeholder='school e-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>sign up</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>already have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>log in</Text></Text>
                </View>
                {/*</KeyboardAwareScrollView> */}
        </View>
    )
}