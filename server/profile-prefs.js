import {firebase} from '../config'

const db = firebase.firestore();
const user = firebase.auth().currentUser;
const userPref = db.collection('users').doc(user.uid).doc('preferences');
const arrayUnion = firebase.firestore.FieldValue.arrayUnion

const setName = (name) => {
  db.collection('users').doc(user.uid).set({
    name
  }, {merge: true})
}

const setBio = (bio) => {
  db.collection('users').doc(user.uid).set({
    bio
  }, {merge: true})
}

const setMajor = (major) => {
  db.collection('users').doc(user.uid).set({
    major
  }, {merge: true})
}

const setCourses = (courses) => {
  db.collection('users').doc(user.uid).set({
    courses: arrayUnion(courses)
  }, {merge: true})
}

const setRelationPref = (relation) => {
    userPref.set({
        relation
    }, {merge: true});
}


const setLearningStyle = (learningStyle) => {
  userPref.set({
    learningStyle
  }, {merge: true})
}

const setPreferredCommunication = (preferredCommunication) => {
  userPref.set({
    preferredCommunication
  }, {merge: true})
}

const setAvailableTimes = (availableTimes) => {
  userPref.set({
    availableTimes
  }, {merge: true})
}

const setUserInterests = (interests) => {
  userPref.set({
    interests
  }, {merge: true})
}

/* update whether user logged in or not */
const setLoggedState = (loggedState) => {
  userPref.set({
    loggedState
  }, {merge: true})
}

/* update whether user wants to receive notifications */
const setNotifPref = (notifPref) => {
  userPref.set({
    notifPref
  }, {merge: true})
}

/* update whether account has been deleted or not */
const setAccountState = (accountState) => {
  userPref.set({
    accountState
  }, {merge: true})
}

export {
  setName,
  setBio,
  setMajor,
  setCourses,
  setRelationPref,
  setPreferredCommunication,
  setLearningStyle,
  setAvailableTimes,
  setUserInterests,
  setLoggedState,
  setNotifPref,
  setAccountState
}
