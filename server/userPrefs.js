import {firebase} from '../config'

const db = firebase.firestore()
const user = firebase.auth().currentUser
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

export {
  setName,
  setBio,
  setMajor,
  setCourses,
  setPreferredCommunication,
  setLearningStyle,
  setAvailableTimes,
  setUserInterests,
}
