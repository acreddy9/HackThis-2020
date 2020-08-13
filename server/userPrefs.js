import {firebase} from '../config'

const db = firebase.firestore()
const user = firebase.auth().currentUser
const arrayUnion = firebase.firestore.FieldValue.arrayUnion

const setName = (name) => {
  db.collection('users').doc(user.uid).set({
    name
  }, {merge: true})
}

const setPrevMatch = (prevMatch) => {
  db.collection('users').doc(user.uid).set({
    prevMatch: prevMatch
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

const setProfessors = (professors) => {
  db.collection('users').doc(user.uid).set({
    professors: arrayUnion(professors)
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
    availableTimes: arrayUnion(availableTimes)
  }, {merge: true})
}

const setUserInterests = (interests) => {
  db.collection('users').doc(user.uid).set({
    interests: arrayUnion(interests)
  }, {merge: true})
}

const setRelationPref = (relation) => {
  db.collection('users').doc(user.uid).set({
        relation
    }, {merge: true});
}

/* update whether user logged in or not */
const setLoggedState = (loggedState) => {
  db.collection('users').doc(user.uid).set({
    loggedState
  }, {merge: true})
}

/* update whether user wants to receive notifications */
const setNotifPref = (notifPref) => {
  db.collection('users').doc(user.uid).set({
    notifPref
  }, {merge: true})
}

/* update whether account has been deleted or not */
const setAccountState = (accountState) => {
  db.collection('users').doc(user.uid).set({
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
  setAccountState,
  setProfessors,
  setPrevMatch
}
