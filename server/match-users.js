import {firebase} from '../config'
import { setName, setPrevMatch } from './userPrefs';

const db = firebase.firestore();
const user = firebase.auth().currentUser;


/* 
Search through users collection for document with the name parameter field. 
Returns uid of that doc
*/
const nameToUid = (name) => {

    db.collection('users').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            const data = doc.data();

            if (data.name.toLowerCase() == name.toLowerCase()) {
                return doc.id;
            }
        });
    });

    console.log("Error: Name does not exist within database");
}

/* return % match between curr user and other user's uid */
const userCompatible = (otherUid) => {

    const matches = 0;

    const relation;
    const learningStyle;
    const prefComm;
    const year;
    const major;
    const interests = [];
    const avail = [];
    const courses = [];
    const profs = [];
    
    db.collection("users").doc(user.uid).get().then(documentSnapshot => {
        relation = documentSnapshot.get("relation").toLowerCase();
        learningStyle = documentSnapshot.get("learningStyle").toLowerCase();
        prefComm = documentSnapshot.get("preferredCommunication").toLowerCase();
        year = documentSnapshot.get("year");
        major = documentSnapshot.get("major").toLowerCase();
        interests = documentSnapshot.get("interests");
        avail = documentSnapshot.get("availableTimes");
        courses = documentSnapshot.get("courses");
        profs = documentSnapshot.get("professors");
    });

    const otherInterests = [];
    const otherAvail = [];
    const otherCourses = [];
    const otherProfs = [];

    db.collection("users").doc(otherUid).get().then(documentSnapshot => {

        if (documentSnapshot.get("year") == year) {
            matches += 1;
        }

        if (documentSnapshot.get("major").toLowerCase() == major) {
            matches += 1;
        }

        if (documentSnapshot.get("relation").toLowerCase() == relation) {
            matches += 1;
        }

        if (documentSnapshot.get("learningStyle").toLowerCase() == learningStyle) {
            matches += 1;
        }

        if (documentSnapshot.get("preferredCommunication").toLowerCase() == prefComm) {
            matches += 1;
        }

        otherInterests = documentSnapshot.get("interests");
        otherAvail = documentSnapshot.get("availableTimes");
        otherCourses = documentSnapshot.get("courses");
        otherProfs = documentSnapshot.get("professors");
    });

    /* compare matches in interests */
    for (let i = 0; i < interests.length; i++) {
        for (let j = 0; j < otherInterests.length; j++) {
            if (interests[i].toLowerCase() == otherInterests[j].toLowerCase()) {
                matches += 1;
            }
        }
    }

    /* compare matches in avail times */
    for (let i = 0; i < avail.length; i++) {
        for (let j = 0; j < otherAvail.length; j++) {
            if (avail[i].toLowerCase() == otherAvail[j].toLowerCase()) {
                matches += 1;
            }
        }
    }
    
    /* compare matches in courses */
    for (let i = 0; i < courses.length; i++) {
        for (let j = 0; j < otherCourses.length; j++) {
            if (courses[i].toLowerCase() == otherCourses[j].toLowerCase()) {
                matches += 1;
            }
        }
    }

    /* compare matches in professors */
    for (let i = 0; i < profs.length; i++) {
        for (let j = 0; j < otherProfs.length; j++) {
            if (courses[i].toLowerCase() == otherProfs[j].toLowerCase()) {
                matches += 1;
            }
        }
    }

    var matchQualities = 5 + 12 + 21 + courses.length + profs.length;
    return (matches / matchQualities) / 100;
}



/* return names of top 4 users that are closest matching to currUser */
const matchUsers = (currUser) => {

    /* store [uid, percentage] of the top 4 matches */
    const firstMatch = [];
    const secondMatch = [];
    const thirdMatch = [];
    const fourthMatch = [];

    const prevMatches = [];
    db.collection('users').doc(currUser.uid).get().then(documentSnapshot => {
        prevMatches = documentSnapshot.get("prevMatch");
    });

    db.collection('users').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            
            if (!prevMatches.includes(doc.data.name)) {
                const compatiblePercent = userCompatible(doc.id);
                
                if (compatiblePercent > firstMatch[1]) {

                    fourthMatch[0] = thirdMatch[0];
                    fourthMatch[1] = thirdMatch[1];

                    thirdMatch[0] = secondMatch[0];
                    thirdMatch[1] = secondMatch[1];

                    secondMatch[0] = firstMatch[0];
                    secondMatch[1] = firstMatch[1];

                    firstMatch[0] = doc.id;
                    firstMatch[1] = compatiblePercent;

                } else if (compatiblePercent > secondMatch[1]) {

                    fourthMatch[0] = thirdMatch[0];
                    fourthMatch[1] = thirdMatch[1];

                    thirdMatch[0] = secondMatch[0];
                    thirdMatch[1] = secondMatch[1];

                    secondMatch[0] = doc.id;
                    secondMatch[1] = compatiblePercent;

                } else if (compatiblePercent > thirdMatch[1]) {

                    fourthMatch[0] = thirdMatch[0];
                    fourthMatch[1] = thirdMatch[1];

                    thirdMatch[0] = doc.id;
                    thirdMatch[1] = compatiblePercent;

                } else if (compatiblePercent > fourthMatch[1]) {

                    fourthMatch[0] = doc.id;
                    fourthMatch[1] = compatiblePercent;
                }
            }
        });
    });

    firstName = nameToUid(firstMatch[0]);
    secondName = nameToUid(secondMatch[0]);
    thirdName = nameToUid(thirdMatch[0]);
    fourthName = nameToUid(fourthMatch[0]);

    /* add these 4 uids to prev matched list */
    setPrevMatch(firstMatch[0]);
    setPrevMatch(secondMatch[0]);
    setPrevMatch(thirdMatch[0]);
    setPrevMatch(fourthMatch[0]);

    return [firstName, secondName, thirdName, fourthName];
}

export {
    matchUsers
}