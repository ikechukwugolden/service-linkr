// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCXyE_SCdQrzh3AS6RxLYyo-FgBVhuC4SY",
  authDomain: "business-8af7f.firebaseapp.com",
  projectId: "business-8af7f",
  storageBucket: "business-8af7f.appspot.com", // fix typo here
  messagingSenderId: "814484301498",
  appId: "1:814484301498:web:412d2c9b216d20cf06c483",
  measurementId: "G-NJ0TGQRYDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);  
export { auth, db, storage, analytics };
