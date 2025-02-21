// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE1t8g1Bfd4rY-A-UM2nWjTeQySrR0q0Q",
  authDomain: "xyntra-966c2.firebaseapp.com",
  projectId: "xyntra-966c2",
  storageBucket: "xyntra-966c2.firebasestorage.app",
  messagingSenderId: "493374167843",
  appId: "1:493374167843:web:33a4ac7fbaddcb0f40ca96",
  measurementId: "G-ER7D0L6X7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);