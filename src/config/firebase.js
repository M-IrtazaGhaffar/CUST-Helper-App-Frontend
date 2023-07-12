// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdvt0nHxYM0LVKgBgymbwlulwvMPWj0ic",
  authDomain: "cust-helper-app.firebaseapp.com",
  projectId: "cust-helper-app",
  storageBucket: "cust-helper-app.appspot.com",
  messagingSenderId: "248216379888",
  appId: "1:248216379888:web:ffaa0570e4e2ef99343d35",
  measurementId: "G-W2LL5RXRR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);