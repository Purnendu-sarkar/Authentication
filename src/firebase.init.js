// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmWrt3lQhdYqfsGVVN5jjFG-GkrXqEub0",
  authDomain: "email-password-auth-ead9b.firebaseapp.com",
  projectId: "email-password-auth-ead9b",
  storageBucket: "email-password-auth-ead9b.firebasestorage.app",
  messagingSenderId: "544002075216",
  appId: "1:544002075216:web:f474db72fee2c1b29a3f55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);