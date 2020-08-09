import {firebase} from '../config'
import { exp } from 'react-native-reanimated'

const db = firebase.firestore()
const user = firebase.auth().currentUser
const arrayUnion = firebase.firestore.FieldValue.arrayUnion

const setName = (name) => {
    db.collection('users').dov(user.uid).set({
        name
    }, {merge: true})
}

const setBio = (bio) => {
    db.collection('users').dov(user.uid).set({
        bio
    }, {merge: true})
}

const setMajor = (major) => {
    db.collection('users').dov(user.uid).set({
        major
    }, {merge: true})
}

const setCourses = (courses) => {
    db.collection('users').dov(user.uid).set({
        courses: arrayUnion(courses)
    }, {merge: true})
}

export {
    setName,
    setBio,
    setMajor,
    setCourses
}