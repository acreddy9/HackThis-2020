import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeoUd_H6c0bK1AqbFq90wh9SnJyTZ6rm0",
  authDomain: "hackthis-d184a.firebaseapp.com",
  databaseURL: "https://hackthis-d184a.firebaseio.com",
  projectId: "hackthis-d184a",
  storageBucket: "hackthis-d184a.appspot.com",
  messagingSenderId: "703849746872",
  appId: "1:703849746872:web:ba128640fdfdc70b5a7f4d",
  measurementId: "G-CXEVS35C09",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
