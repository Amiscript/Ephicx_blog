// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import additional Firebase SDKs as needed
// Example: import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ephicx-blog.firebaseapp.com",
  projectId: "ephicx-blog",
  storageBucket: "ephicx-blog.appspot.com",
  messagingSenderId: "897091611661",
  appId: "1:897091611661:web:3104e587d0c5ab095ef944"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 
// Initialize additional Firebase services if needed
// Example: const db = getFirestore(app);