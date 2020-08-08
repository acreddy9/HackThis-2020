import {firebase} from '../config'

loginExistingUser = (email, password) => {

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const uid = res.uid
      const userRef = firebase.firestore().collection('users')
      userRef
        .doc(uid)
        .get()
        .then((doc) => {
          if(!doc.exists) {
            alert('User does not exist anymore')
            return
          }
        })
        .catch((e) => console.log(e))
    })
    .catch((e) => {
      console.log(e.message)
    })
}

createNewUser = (email, password) => {

  //Do email / password validation check first

  // firebase auth and store to database
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const uid = response.user.uid
      const data = {
        id: uid,
        email: response.user.email,
      }
      const usersRef = firebase.firestore().collection('users')
      usersRef
        .doc(uid)
        .set(data)
        .then(() => console.log('Document successfully written'))
        .catch(error => console.log(error))
    })
    .catch((error) => {
      console.log(error)
    })
}

export {
  createNewUser,
  loginExistingUser
}

