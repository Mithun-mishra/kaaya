// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBcysCeifuYxro2k_M3Vo2wzenRC7Ko_c",
  authDomain: "kaaya-cef8b.firebaseapp.com",
  projectId: "kaaya-cef8b",
  storageBucket: "kaaya-cef8b.appspot.com",
  messagingSenderId: "133997876752",
  appId: "1:133997876752:web:1c1e3af8a844a7da37dc95",
  measurementId: "G-5PFR58DH4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);