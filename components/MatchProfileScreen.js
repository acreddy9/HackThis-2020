import React from "react";
import { View, TouchableOpacity, Text, Image, KeyboardAwareScrollView } from "react-native";
import styles from "./styles";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import Checkbox from 'react-native-custom-checkbox';

export default function MatchProfile({ route, navigation }) {
    const { selectedMatch } = route.params;

    const onBackPress = () => {
        navigation.navigate('MatchScreen')
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">

            
                <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                    <Ionicons name="ios-arrow-back" size={25}/>
                </TouchableOpacity>

                {/*
                <TouchableOpacity style={styles.chatButton} onPress={()=> navigation.navigate('ChatRoom')}>     
                <View style={{height:45, width:45, backgroundColor:"#6C63FF", borderRadius:100, position:"relative", top:117, left: 123}}    />
                <View style={styles.wholeChatButton}>
                <MaterialCommunityIcons name="chat" size={30} color={"#FFF"} iconStyle={styles.chatButton}/>
                </View>
                </TouchableOpacity>
                
                
            

            <View style={styles.user_name}>
            <Text style={[styles.profileSectionHeader, {color: "#6c63ff", fontSize: 20}]}>{selectedMatch}</Text>
            </View>

            <View style={styles.user_stuff}>
            <Text style={ {color: "#626262", fontSize: 17, fontFamily: "Ubuntu-Light",paddingBottom:5}}>they/them/their</Text>
            <Text style={ {color: "#626262", fontSize: 17, fontFamily: "Ubuntu-Light",paddingBottom:5}}>Junior</Text>
            <Text style={ {color: "#626262", fontSize: 17, fontFamily: "Ubuntu-Light",paddingBottom:5}}>Mathematics</Text>
            </View>
           

            <View style={styles.img_container}>
            <Image
            style={styles.match_img}
            source={require('../assets/nick-miller.png')}
            />
            </View>

            <View style={styles.user_bio}>
                    <Text style={{fontFamily:"Ubuntu-Light", fontSize: 16, margin: 30}}>Gamma theta pi !!! Fav artist: Kanye. Fav quote: “We think,
                    mistakenly, that success is the result of the amount of
                    time we put in at work, instead of the quality of time we
                    put in.” Hmu if you need a study buddy.</Text>
            </View>

            
            <Text style={ {color: "#6c63ff", fontSize: 20, fontFamily:"Ubuntu-Medium", 
            position:"relative", right: 107, bottom: 130}}>Shared courses</Text>

            <View style={styles.sharedCourses_text}>
                
                <Text style={{color:"#626262", fontFamily: "Ubuntu-Light", fontSize: 16,marginBottom: 10,width: '50%'}}>CS 200 with Mark Renault</Text>
                <Text style={{color:"#626262", fontFamily: "Ubuntu-Light", fontSize: 16,marginBottom: 10,width: '50%' }}>PSYCH 225 with Mark Renault</Text>
                
            </View>
            
           
            <View style={{top:220}}>

            <Text style={ {color: "#6c63ff", fontSize: 20, fontFamily:"Ubuntu-Medium", 
            position:"relative", right: 105, bottom: 320}}>Learning styles</Text>
            
            <Text style={ {color: "#6c63ff", fontSize: 20, fontFamily:"Ubuntu-Medium", 
            position:"relative", left: 90, bottom: 340}}>Communication</Text>
       
            
            <View style={styles.LStyle_text}>
                
                <Text style={{color:"#626262", fontFamily: "Ubuntu-Light", fontSize: 16,marginBottom: 10,}}>1. Small group</Text>
                <Text style={{color:"#626262", fontFamily: "Ubuntu-Light", fontSize: 16,marginBottom: 10,}}>2. One-on-one</Text>
                <Text style={{color:"#626262", fontFamily: "Ubuntu-Light", fontSize: 16,}}> 3. Large group </Text>
                
            </View>
            <View style={styles.commModeText}>
                
                <Text style={{color:"#626262", fontFamily: "Ubuntu-Light", fontSize: 16,marginBottom: 10,}}>1. Call</Text>
                <Text style={{color:"#626262", fontFamily: "Ubuntu-Light", fontSize: 16,marginBottom: 10,}}>2. Text</Text>
                <Text style={{color:"#626262", fontFamily: "Ubuntu-Light", fontSize: 16,}}>3. Videochat</Text>
                
            </View>
            </View>
            
            
            
            <Text style={ {color: "#6c63ff", fontSize: 20, fontFamily:"Ubuntu-Medium", 
            position:"relative", right: 95, bottom: 160, marginBottom: 70}}>Shared availability</Text>
            
            <Text style={ {color: "#626262", fontSize: 16, fontFamily:"Ubuntu-Light", 
            position:"relative", right: 145, bottom: 190, marginBottom:20}}>Morning</Text>
            <Text style={ {color: "#626262", fontSize: 16, fontFamily:"Ubuntu-Light", 
            position:"relative", right: 140, bottom: 190, marginBottom:20}}>Afternoon</Text>
            <Text style={ {color: "#626262", fontSize: 16, fontFamily:"Ubuntu-Light", 
            position:"relative", right: 145, bottom: 190, marginBottom:20}}>Evening</Text>

                <View style={styles.checkboxGrid1}>

                    <View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>

                    <View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View><View style={{marginRight:15, marginBottom: 30}}>
                    <Checkbox
                    checked={true}
                    style={{backgroundColor: '#FFF', color:'#6C63FF', 
                    borderRadius: 5, borderColor:'#707070', borderWidth: 1, }} />
                    </View>
                    </View>
                    </View>
            */}
                </KeyboardAwareScrollView>
            </View>
    );
}
