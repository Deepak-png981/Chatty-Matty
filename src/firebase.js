// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqk7ltfSghWoIXIGhpt4PWMIIQy-49F5M",
  authDomain: "chat-web-app-fac38.firebaseapp.com",
  projectId: "chat-web-app-fac38",
  storageBucket: "chat-web-app-fac38.appspot.com",
  messagingSenderId: "124234205671",
  appId: "1:124234205671:web:bc2b5d2d65af8a60609542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
