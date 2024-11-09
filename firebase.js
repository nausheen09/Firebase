
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth ,signOut ,createUserWithEmailAndPassword ,updateProfile,signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification, updateEmail, updatePassword, deleteUser, signInWithPopup, GoogleAuthProvider, } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";





const firebaseConfig = {
    apiKey: "AIzaSyCanqP-gYN5vvkJSsYZyrK1a1FngKvx8Jg",
    authDomain: "loginform-941.firebaseapp.com",
    projectId: "loginform-941",
    storageBucket: "loginform-941.appspot.com",
    messagingSenderId: "12134223623",
    appId: "1:12134223623:web:b4c8918fa60d06c45effa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

export {db,collection, addDoc, getAuth,signOut ,createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword,onAuthStateChanged ,sendEmailVerification, updateEmail, updatePassword, deleteUser, signInWithPopup, GoogleAuthProvider, auth, }
