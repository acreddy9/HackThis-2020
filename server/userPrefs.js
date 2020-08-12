import {firebase} from '../config'

const db = firebase.firestore()
const user = firebase.auth().currentUser
const userPref = db.collection('users').doc(user.uid).collection('preferences');
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

const setYear = (year) => {
  db.collection('users').doc(user.uid).set({
    year
  }, {merge: true})
}

const setCourses = (courses) => {
  db.collection('users').doc(user.uid).set({
    courses: arrayUnion(courses)
  }, {merge: true})
}

const setLearningStyle = (learningStyle) => {
  db.collection('users').doc(user.uid).set({
    learningStyle
  }, {merge: true})
}

const setPreferredCommunication = (preferredCommunication) => {
  db.collection('users').doc(user.uid).set({
    preferredCommunication
  }, {merge: true})
}

const setAvailableTimes = (availableTimes) => {
  db.collection('users').doc(user.uid).set({
    availableTimes
  }, {merge: true})
}

const setUserInterests = (interests) => {
  db.collection('users').doc(user.uid).set({
    interests
  }, {merge: true})
}

const setRelationPref = (relation) => {
    userPref.set({
        relation
    }, {merge: true});
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
  setYear,
  setCourses,
  setPreferredCommunication,
  setLearningStyle,
  setAvailableTimes,
  setUserInterests,
  setRelationPref,
  setLoggedState,
  setNotifPref,
  setAccountState
}
