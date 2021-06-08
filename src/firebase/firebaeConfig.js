import firebase from 'firebase/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyAU3hCvBAwKyZ7lULDKOOn0XraBnkQuCaQ",
    authDomain: "maplestudio-4f0fd.firebaseapp.com",
    projectId: "maplestudio-4f0fd",
    storageBucket: "maplestudio-4f0fd.appspot.com",
    messagingSenderId: "485345047309",
    appId: "1:485345047309:web:dcdbfd55c4891f41bab644",
    measurementId: "G-4Q43LVNTEL"
}

firebase.initializeApp(config)

const db = firebase.firestore()
