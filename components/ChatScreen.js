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
        { key: 1, pic: require('../assets/charlie-logan.png'), name: "Charlie Logan", lastMessage: {text: "How is your work going?", timestamp: new Date(Date.now() - 600000)}, read: false},
        { key: 2, pic: require('../assets/callum-cervantes.png'), name: "Callum Cervantes", lastMessage: {text: "I like icecream.", timestamp: new Date(Date.now() - 6000000)}, read: false},
        { key: 3, pic: require('../assets/aminah-ratcliffe.png'), name: "Aminah Ratcliffe", lastMessage: {text: "I fdaafdsafas", timestamp: new Date(Date.now() - 60000000)}, read: false},
        { key: 4, pic: require('../assets/huey-kent.png'), name: "Huey Kent", lastMessage: {text: "Woah.", timestamp: new Date(Date.now() - 6000000000)}, read: true}
      ];

    let Data=convos;
    let User=Data.map((u_data)=>{
        return(
          <View style={chatStyles.panel}>  
              <TouchableOpacity /* onPress={()=> this.props.navigation.navigate('ChatRoom',{
                    uemail:this.state.uemail,
                    uid:this.state.uid,
                    uname:this.state.uname,
                    fid:u_data.uid,
                    fname:u_data.name,
                    femail:u_data.email
                })} */>
                    <View >
                        <View style={chatStyles.list}  >
                            <View  style={ {width: 45} }> 
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
                            <View style={ {width:'50%'} }> 
                                <Text style={ chatStyles.name}> {u_data.name}</Text>
                                <Text style={ chatStyles.smallGreyText}> {u_data.lastMessage.text}</Text> 
                            </View>
                            <View style={{width: 90}}>
                              <Text style={ [chatStyles.smallGreyText, {textAlign: 'right'}]}> {timeSince(u_data.lastMessage.timestamp)}</Text>
                              <View style={{width: 100, paddingLeft: 80, paddingTop: 10}}>
                                <View style={ [chatStyles.readDot, !u_data.read ? ({backgroundColor: '#0b85bd'}) : ({backgroundColor: '#aaa', })] } />
                              </View>
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
          <View style={chatStyles.home_padding}>
              <ScrollView>
                  {User}
              </ScrollView>
          </View>
      </View>
    )
}

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval >= 1) {
    return Math.floor(interval) == 1 ? Math.floor(interval) + " year ago" : Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval >= 1) {
    return Math.floor(interval) == 1 ? Math.floor(interval) + " month ago" : Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval >= 1) {
    return Math.floor(interval) == 1 ? Math.floor(interval) + " day ago" : Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval >= 1) {
    return Math.floor(interval) == 1 ? Math.floor(interval) + " hour ago" : Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval >= 1) {
    return Math.floor(interval) == 1 ? Math.floor(interval) + " minute ago" : Math.floor(interval) + " minutes ago";
  }
  return Math.floor(interval) == 1 ? Math.floor(interval) + " second ago" : Math.floor(interval) + " seconds ago";
}

const chatStyles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    borderBottomColor:'#e3e3e1',
    borderBottomWidth:1 ,
  },

home_padding: {
    padding:10,
    backgroundColor: "#ffffff",	
    flex: 1
},
readDot:{borderRadius: 20, width: 10, height: 10},
name:{
  color: '#000000',
  fontSize: 17}, 
smallGreyText:{
  color: '#aaa',
  fontSize: 12,
  paddingLeft: 2}, 
     
    list:{
      width: 400,
    flexDirection: 'row',
     paddingTop:20,
    paddingBottom:20,
    
		//marginTop: 3,
		//width: screenWidth / 2 - 30,
		//marginRight: 20		
	},
})