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


export default function ChatScreen( {navigation} ) {
    var convos = [
        //name key is must.It is to show the text in front
        { key: 1, pic: require('../assets/charlie-logan.png'), name: "Charlie Logan", lastMessage: {text: "How is your work going?", timestamp: new Date(Date.now() - 600000)}, read: false},
        { key: 2, pic: require('../assets/callum-cervantes.png'), name: "Callum Cervantes", lastMessage: {text: "OMG I think I just figured it out!", timestamp: new Date(Date.now() - 6000000)}, read: false},
        { key: 3, pic: require('../assets/aminah-ratcliffe.png'), name: "Aminah Ratcliffe", lastMessage: {text: "Lecture was so entertaining today", timestamp: new Date(Date.now() - 60000000)}, read: false},
        { key: 4, pic: require('../assets/huey-kent.png'), name: "Huey Kent", lastMessage: {text: "Wow great job!", timestamp: new Date(Date.now() - 6000000000)}, read: true}
      ];

    let Data=convos;
    let User=Data.map((u_data)=>{
        return(
          <View style={chatStyles.panel} key={u_data.key}>  
              <TouchableOpacity  onPress={()=> navigation.navigate('ChatRoom')}/*,{
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
                              <Text style={ [chatStyles.smallGreyText, {textAlign: 'right', marginRight: -5}]}> {timeSince(u_data.lastMessage.timestamp)}</Text>
                              <View style={{width: 100, paddingLeft: 85, paddingTop: 10}}>
                                <View style={ [chatStyles.readDot, !u_data.read ? ({backgroundColor: '#6c63ff'}) : ({backgroundColor: '#fff', })] } />
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
    paddingLeft: 15,
    backgroundColor: "#ffffff",	
    flex: 1
},
readDot:{borderRadius: 20, width: 10, height: 10},
name:{
  color: '#000000',
  fontFamily: "Ubuntu-Light",
  fontSize: 17}, 
smallGreyText:{
  color: '#aaa',
  fontSize: 12,
  fontFamily: "Ubuntu-Light",
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