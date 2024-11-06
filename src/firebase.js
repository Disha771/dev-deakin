import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGx3vecM1NWez80LfhNUXpRIohYLgJ80g",
  authDomain: "task-99f54.firebaseapp.com",
  projectId: "task-99f54",
  storageBucket: "task-99f54.firebasestorage.app",
  messagingSenderId: "79548787092",
  appId: "1:79548787092:web:77505fcf07b285bed54781"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };