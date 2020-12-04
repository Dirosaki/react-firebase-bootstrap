import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0dObn8-twPQx0-6wMtgSgBBFvW4z2onc",
    authDomain: "eventos-d79f1.firebaseapp.com",
    databaseURL: "https://eventos-d79f1.firebaseio.com",
    projectId: "eventos-d79f1",
    storageBucket: "eventos-d79f1.appspot.com",
    messagingSenderId: "356438251449",
    appId: "1:356438251449:web:7a9e65e152079993bb8868"
  };
  
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);