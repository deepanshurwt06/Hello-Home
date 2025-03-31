// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-management-3d446.firebaseapp.com",
  projectId: "real-state-management-3d446",
  storageBucket: "real-state-management-3d446.firebasestorage.app",
  messagingSenderId: "336464325102",
  appId: "1:336464325102:web:0936e29dcbd1889d9c06ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);