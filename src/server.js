// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Initialize Firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAp4T7mkUDEGTA84IzMFzsp7qU5dSconYM",
  authDomain: "keeper-ac59e.firebaseapp.com",
  projectId: "keeper-ac59e",
  storageBucket: "keeper-ac59e.appspot.com",
  messagingSenderId: "167996978059",
  appId: "1:167996978059:web:6f5e3acf40db8408c5358e"
});


const db = getFirestore()

export default { db }


