// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiNkwvU_pD-qKdDs65xnyui-kQmQX4iVw",
    authDomain: "podlove-8cea9.firebaseapp.com",
    projectId: "podlove-8cea9",
    storageBucket: "podlove-8cea9.firebasestorage.app",
    messagingSenderId: "5923503744",
    appId: "1:5923503744:web:c96a997c724cfbc9013065"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };