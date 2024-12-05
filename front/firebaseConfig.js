// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBo_jKQ4Ihsv7q5AnuTUbj7jEw7OnQihM",
    authDomain: "jobaba-4ca97.firebaseapp.com",
    databaseURL: "https://jobaba-4ca97-default-rtdb.firebaseio.com",
    projectId: "jobaba-4ca97",
    storageBucket: "jobaba-4ca97.firebasestorage.app",
    messagingSenderId: "67124286362",
    appId: "1:67124286362:web:4b07382e519d12edd6a023",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
