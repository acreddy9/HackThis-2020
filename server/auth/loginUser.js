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