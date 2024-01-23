// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-92ec8.firebaseapp.com",
  projectId: "mern-blog-92ec8",
  storageBucket: "mern-blog-92ec8.appspot.com",
  messagingSenderId: "680232931386",
  appId: "1:680232931386:web:e3c550c23a1e12de752503"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

