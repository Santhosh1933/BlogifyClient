// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBkGcATS-dfOEeLi6W5zMwES-vwDE5Sxw",
  authDomain: "blogify-a4ff9.firebaseapp.com",
  projectId: "blogify-a4ff9",
  storageBucket: "blogify-a4ff9.appspot.com",
  messagingSenderId: "814682774861",
  appId: "1:814682774861:web:2e2484f75dfe92d71d2b04",
  measurementId: "G-WQBVFY4DTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);