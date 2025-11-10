// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDin6qa-owIo6jEksfB24S0HJIqMe86XqI",
    authDomain: "import-export-app-8fcaa.firebaseapp.com",
    projectId: "import-export-app-8fcaa",
    storageBucket: "import-export-app-8fcaa.firebasestorage.app",
    messagingSenderId: "657711857598",
    appId: "1:657711857598:web:d9f2f510550bfc2c27c3ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()