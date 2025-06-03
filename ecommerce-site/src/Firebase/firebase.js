// src/Firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhf8uW1ZEV4r5bmq1mkrceEvBbczf3pAg",
  authDomain: "openwisdom1-70fb5.firebaseapp.com",
  projectId: "openwisdom1-70fb5",
  storageBucket: "openwisdom1-70fb5.firebasestorage.app",
  messagingSenderId: "668435507016",
  appId: "1:668435507016:web:c32005cd951eeacda2357d",
  measurementId: "G-0FHTTQ8SGE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
