// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA1jxFaa4Jw4DzBro5ICBSWHZtsRd-DjE",
  authDomain: "mtc-bus-app.firebaseapp.com",
  projectId: "mtc-bus-app",
  storageBucket: "mtc-bus-app.appspot.com",
  messagingSenderId: "454789234858",
  appId: "1:454789234858:web:ae755b93db35bd1f8950d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db,auth}