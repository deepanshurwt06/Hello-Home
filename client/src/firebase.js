// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-43fda.firebaseapp.com",
  projectId: "auth-app-43fda",
  storageBucket: "auth-app-43fda.firebasestorage.app",
  messagingSenderId: "286582038831",
  appId: "1:286582038831:web:bbc85b9950fdefa2aec1da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);