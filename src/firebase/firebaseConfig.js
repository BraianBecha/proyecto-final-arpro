// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDimwkqIfAKYbAvmcC7IURe3LH_GYTifqs",
  authDomain: "portfoliobraianbechadev.firebaseapp.com",
  projectId: "portfoliobraianbechadev",
  storageBucket: "portfoliobraianbechadev.appspot.com",
  messagingSenderId: "216226153522",
  appId: "1:216226153522:web:d5a3f4d6ea0be53456282b",
  measurementId: "G-LLW2R3JM7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);