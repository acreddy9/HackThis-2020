import {firebase} from './config'

const db = firebase.firestore()
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

const setProfilePicture = (uid, uri) => {
  db.collection('users').doc(uid).set({
    profile_pic: uri
  }, {merge: true})
}

const setMatchEnable = (uid, val) => {
  db.collection('users').doc(uid).set({
    matchEnable: val
  }, {merge: true})
}


const setUserCourses = (course) => {
  db.collection('users').doc(user.uid).set({
    courses: arrayUnion(course)
  }, {merge: true})
}


//Getters for courses
const getUniversityCourses = (school) => {
  const courses = []
  if(school === 'University of Illinois Urbana-Champaign') {
    db.collection('universities').doc("uiuc").collection("courses").get().then(documentSnapshot => {
      let i = 1;
      documentSnapshot.forEach(child => {
        const courseData = child.data();
        courses.push({id:i, name:courseData.name, professors: courseData.professors, code: courseData.code})
        i++
      })
    })
  }
  else if(school === 'Purdue University') {
    db.collection('universities').doc("purdue").collection("courses").get().then(documentSnapshot => {
      let i = 1;
      documentSnapshot.forEach(child => {
        const courseData = child.data();
        courses.push({id:i, name:courseData.name, professors: courseData.professors, code: courseData.code})
        i++
      })
    })
  }
  return courses

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
  setProfilePicture,
  setMatchEnable,
  getUniversityCourses
  // setPreferredCommunication,
  // setLearningStyle,
  // setAvailableTimes,
  // setUserInterests,
  // setRelationPref,
  // setLoggedState,
  // setNotifPref,
  // setAccountState
}
