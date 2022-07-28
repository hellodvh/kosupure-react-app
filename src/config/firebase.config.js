// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import Authentication
import { getAuth } from "firebase/auth";
//Import Firestore
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

// .env variables
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//create initial instance of auth functionality
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Cloud Storage
export const storage = getStorage(app);