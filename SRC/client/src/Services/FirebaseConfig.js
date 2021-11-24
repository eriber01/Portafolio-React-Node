import firebase from 'firebase/compat/app'
//import {GoogleAuthProvider} from 'firebase/auth'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB5J5UEeITPlZDR2ygJq1AJKrfw34aihNk",
    authDomain: "portafolios-14797.firebaseapp.com",
    projectId: "portafolios-14797",
    storageBucket: "portafolios-14797.appspot.com",
    messagingSenderId: "126242862710",
    appId: "1:126242862710:web:294edfe77dd6e25feb1157",
    measurementId: "G-KQWP8BBEJM"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const FirebaseStorage = firebase.firestore()


/* 
authenticate with google account
const provider = new GoogleAuthProvider();
provider.setCustomParameters({'login_hint': 'eriber01@gmail.com'}) 

const singInWithGoogle = () => auth.signInWithPopup(provider)
*/


export {auth, FirebaseStorage, /* singInWithGoogle */}

