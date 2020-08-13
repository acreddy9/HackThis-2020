import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    AsyncStorage,
   TextInput
  } from 'react-native';
import  Header  from './Header.js';
import GreyHorizontalLine from './GreyHorizontalLine'
import styles from './styles.js'

const screenWidth = Math.round(Dimensions.get('window').width);


export default function ChatScreen() {
    var convos = [
        //name key is must.It is to show the text in front
        { key: 1, name: 'Chris', pic: require('../assets/default-profile-pic.jpg'), lastMessage: "How is your work going?", read: false},
        { key: 2, name: 'Nathan', pic: require('../assets/default-profile-pic.jpg'), lastMessage: "I like icecream.", read: false},
        { key: 4, name: 'Bohdan', pic: require('../assets/default-profile-pic.jpg'), lastMessage: "I fdaafdsafas", read: false},
        
      ];

    let Data=convos;
    let User=Data.map((u_data)=>{
        return(
          <View style={bog.backarrow}>  
              <TouchableOpacity /* onPress={()=> this.props.navigation.navigate('ChatRoom',{
                    uemail:this.state.uemail,
                    uid:this.state.uid,
                    uname:this.state.uname,
                    fid:u_data.uid,
                    fname:u_data.name,
                    femail:u_data.email
                })} */>
                    <View >
                        <View style={bog.list}  >
                            <View  style={ bog.forwidth_left}> 
                                <TouchableOpacity >
                                    <Image style={{ 
                                     width: 40, 
                                     height: 40,
                                     borderRadius:87, 
                                     position:'absolute', 
                                     top:0, 
                                     left:0 
                                    }} source={u_data.pic} />
                                </TouchableOpacity>
                            </View>
                            <View style={ bog.forwidth_right}> 
                                <Text style={ bog.price}> {u_data.name}</Text>
                                <Text style={ bog.carname}> {u_data.lastMessage}</Text> 
                            </View>
                        </View>
                        </View>
              </TouchableOpacity>
            </View>
        )
      })
    return (
      <View style={styles.container}>
              <View>   
                        <Header title={"Chats"}/>
                </View>
          <View style={bog.home_padding}>
              <ScrollView>
                  {User}
              </ScrollView>
          </View>
      </View>
    )
}

const bog = StyleSheet.create({
  backarrow: {
    flexDirection: 'row',
  },

home_padding: {
    padding:10,
    backgroundColor: "#ffffff",	
    flex: 1
},
forwidth_left:{
         width: 45,
         //paddingBottom:30
    },
    forwidth_right:
    {width:'50%'
},
price:{color: '#0b85bd',fontSize: 18, /* paddingTop:20 */}, 
carname:{color: '#010000',fontSize: 10}, 
     
    list:{
      width: 400,
    flexDirection: 'row',
    borderBottomColor:'#e3e3e1',
      borderBottomWidth:2 ,
     paddingTop:20,
    paddingBottom:20,
    
		//marginTop: 3,
		//width: screenWidth / 2 - 30,
		//marginRight: 20		
	},
})