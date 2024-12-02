import { initializeApp } from "firebase/app";
import { firebase, firestore } from "firebase/app";
import { getAuth } from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBo_jKQ4Ihsv7q5AnuTUbj7jEw7OnQihM",
  authDomain: "jobaba-4ca97.firebaseapp.com",
  databaseURL: "https://jobaba-4ca97-default-rtdb.firebaseio.com",
  projectId: "jobaba-4ca97",
  storageBucket: "jobaba-4ca97.firebasestorage.app",
  messagingSenderId: "67124286362",
  appId: "1:67124286362:web:4b07382e519d12edd6a023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const firestore = firebase.firestore();

export { app, auth };
