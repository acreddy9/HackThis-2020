import {firebase} from '../config'

const db = firebase.firestore();
const user = firebase.auth().currentUser;
const usersRef = db.collection('users');
const currUserRef = usersRef.doc(user.uid);
const currUserPref = currUserRef.doc('preferences');


/* return % match between curr user and other user */
const matchUsers = (otherUser) => {

    var matchQualities = 7;
    var matches = 0;

    const relation;
    const learningStyle;
    const prefComm;
    const year;
    const major;
    
    currUserPref.get().then(documentSnapshot => {
        relation = documentSnapshot.get('relation');
        learningStyle = documentSnapshot.get('learningStyle');
        prefComm = documentSnapshot.get('preferredCommunication');
        year = documentSnapshot.get('year');
        major = documentSnapshot.get('major');
    });

    const otherUserRef = usersRef.doc(otherUser.uid);
    otherUserRef.get().then(documentSnapshot => {

        if (documentSnapshot.get('year') == year) {
            matches += 1;
        }

        if (documentSnapshot.get('major') == major) {
            matches += 1;
        }

        /* check for matches in preferences */
        documentSnapshot.doc('preferences').get().then(childSnapshot => {
            if (childSnapshot.get('relation') == relation) {
                matches += 1;
            }

            if (childSnapshot.get('learningStyle') == learningStyle) {
                matches += 1;
            }

            if (childSnapshot.get('preferredCommunication') == prefComm) {
                matches += 1;
            }

        });
    });

    return (matches / matchQualities) / 100;
}

export {
    matchUsers
}