// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASEMe_LX6tmoxGt7KaWWLg9iiYVIev6fo",
  authDomain: "recover-72ce5.firebaseapp.com",
  projectId: "recover-72ce5",
  storageBucket: "recover-72ce5.appspot.com",
  messagingSenderId: "693315692705",
  appId: "1:693315692705:web:4d1222ab66d5fb924fe8e0",
  measurementId: "G-KWY7PBRKWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
