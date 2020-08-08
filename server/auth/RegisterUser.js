import {firebase} from '../config'

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

export { createNewUser }