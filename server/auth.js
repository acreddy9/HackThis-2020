import {firebase} from './config'
import { useNavigation } from '@react-navigation/native'

function loginExistingUser(email, password) {
  const navigation = useNavigation();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const uid = res.user.uid
      const userRef = firebase.firestore().collection('users')
      userRef
        .doc(uid)
        .get()
        .then((doc) => {
          if(!doc.exists) {
            alert('User does not exist anymore')
          }
          else {
            console.log("Login success");
            navigation.navigate('MainTabs');
          }
        }, () => { alert('Some other error occurred')})
        .catch((e) => console.log(e))
    })
    .catch((e) => {
      console.log(e.message)
    })
    
}

function createNewUser(userInfo, email, password) {

  //Do email / password validation check first

  // firebase auth and store to database
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const uid = response.user.uid
      console.log(uid)
      const data = {
        id: uid,
        email: response.user.email,
        //additional user info (userInfo can be passed in as an object)
        // major
        // First and Last name
        // empty profile pic buffer for now
      }
      const usersRef = firebase.firestore().collection('users')
      usersRef
        .doc(uid)
        .set(data)
        .then(() => console.log('Document successfully written'))
        .catch(error => console.log(error))
        return true;
    })
    .catch((error) => {
      console.log(error)
    })
    return false;
}

export default {
  createNewUser,
  loginExistingUser
}

