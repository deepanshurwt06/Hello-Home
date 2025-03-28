// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-641f4.firebaseapp.com",
  projectId: "mern-auth-641f4",
  storageBucket: "mern-auth-641f4.firebasestorage.app",
  messagingSenderId: "442234564805",
  appId: "1:442234564805:web:9239308745d202b4d240ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);