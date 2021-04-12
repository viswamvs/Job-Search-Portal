import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAUYOY22JdaGClS6EAYVvSoTut41_jc2Ho",
    authDomain: "react-firebase-auth-2d391.firebaseapp.com",
    projectId: "react-firebase-auth-2d391",
    storageBucket: "react-firebase-auth-2d391.appspot.com",
    messagingSenderId: "687655721314",
    appId: "1:687655721314:web:933d8b72d363d9d9bd743b"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;