// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage}  from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "betaorder-d70e0.firebaseapp.com",
  projectId: "betaorder-d70e0",
  storageBucket: "betaorder-d70e0.firebasestorage.app",
  messagingSenderId: "88619019500",
  appId: "1:88619019500:web:dbf097582977fe95d849c9"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage}