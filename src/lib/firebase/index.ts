// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCexdFFtbmNSMLh1FDbcWSivk0Q2MJiRUY",
  authDomain: "tobey-f6ef9.firebaseapp.com",
  projectId: "tobey-f6ef9",
  storageBucket: "tobey-f6ef9.appspot.com",
  messagingSenderId: "192723074786",
  appId: "1:192723074786:web:80fe969cda504b6584e8bb",
  measurementId: "G-N88X5DHY9X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
