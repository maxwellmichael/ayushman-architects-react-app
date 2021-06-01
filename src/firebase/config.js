import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDs83hxJZHJnwxSz6xYScgRA_XQWTk9eRI",
    authDomain: "ayushmanarchitects-firebase.firebaseapp.com",
    projectId: "ayushmanarchitects-firebase",
    storageBucket: "ayushmanarchitects-firebase.appspot.com",
    messagingSenderId: "558316320343",
    appId: "1:558316320343:web:92ddab716f437dcb3e1512"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp
const projectStorage = firebase.storage();
const projectDatabase = firebase.firestore();

export {projectStorage, projectDatabase, timestamp};