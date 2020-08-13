import {firebase} from './config'

const db = firebase.firestore()
//const user = firebase.auth().currentUser
//const userPref = db.collection('users').doc(user.uid).collection('preferences');
const arrayUnion = firebase.firestore.FieldValue.arrayUnion

const setUserProperties = (uid, user) => {
  db.collection('users').doc(uid).set({
    name: user.name,
    major: user.major,
    bio: user.bio,
    year: user.year,
    pronouns: user.pronouns

  }, {merge: true})
}

// const setUserName = (uid, name) => {
//   db.collection('users').doc(uid).set({
//     name
//   }, {merge: true})
// }

// const setUserBio = (uid, bio) => {
//   db.collection('users').doc(uid).set({
//     bio
//   }, {merge: true})
// }

// const setUserMajor = (uid, major) => {
//   db.collection('users').doc(uid).set({
//     major
//   }, {merge: true})
// }

// const setUserYear = (uid, year) => {
//   db.collection('users').doc(uid).set({
//     year
//   }, {merge: true})
// }

const setUserCourses = (uid, course) => {
  db.collection('users').doc(uid).set({
    courses: arrayUnion(course)
  }, {merge: true})
}

// const setLearningStyle = (learningStyle) => {
//   db.collection('users').doc(user.uid).set({
//     learningStyle
//   }, {merge: true})
// }

// const setPreferredCommunication = (preferredCommunication) => {
//   db.collection('users').doc(user.uid).set({
//     preferredCommunication
//   }, {merge: true})
// }

// const setAvailableTimes = (availableTimes) => {
//   db.collection('users').doc(user.uid).set({
//     availableTimes
//   }, {merge: true})
// }

// const setUserInterests = (interest) => {
//   db.collection('users').doc(user.uid).set({
//     interests: arrayUnion(interest)
//   }, {merge: true})
// }

// const setRelationPref = (relation) => {
//     userPref.set({
//         relation
//     }, {merge: true});
// }

// /* update whether user logged in or not */
// const setLoggedState = (loggedState) => {
//   userPref.set({
//     loggedState
//   }, {merge: true})
// }

// /* update whether user wants to receive notifications */
// const setNotifPref = (notifPref) => {
//   userPref.set({
//     notifPref
//   }, {merge: true})
// }

// /* update whether account has been deleted or not */
// const setAccountState = (accountState) => {
//   userPref.set({
//     accountState
//   }, {merge: true})
// }

export {
  setUserProperties,
  setUserCourses,
  // setPreferredCommunication,
  // setLearningStyle,
  // setAvailableTimes,
  // setUserInterests,
  // setRelationPref,
  // setLoggedState,
  // setNotifPref,
  // setAccountState
}
