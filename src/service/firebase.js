// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCLGKYak7dppzCQrYfKURufnuWiR8OrMQ",
  authDomain: "socitey-eac32.firebaseapp.com",
  projectId: "socitey-eac32",
  storageBucket: "socitey-eac32.appspot.com",
  messagingSenderId: "832661868130",
  appId: "1:832661868130:web:e0c3dafc2523f13fe40b3b",
  measurementId: "G-KDQ0Z0C9NN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics();
export const db = getFirestore();