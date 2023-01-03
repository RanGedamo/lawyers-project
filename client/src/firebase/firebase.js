// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "lawyersproject-b2142.firebaseapp.com",
  projectId: "lawyersproject-b2142",
  storageBucket: "lawyersproject-b2142.appspot.com",
  messagingSenderId: "686274577363",
  appId: "1:686274577363:web:69f2ff9029711197136526",
  measurementId: "G-RS5DLNFP7C"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
