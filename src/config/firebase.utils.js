import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCBkGcATS-dfOEeLi6W5zMwES-vwDE5Sxw",
  authDomain: "blogify-a4ff9.firebaseapp.com",
  projectId: "blogify-a4ff9",
  storageBucket: "blogify-a4ff9.appspot.com",
  messagingSenderId: "814682774861",
  appId: "1:814682774861:web:2e2484f75dfe92d71d2b04",
};
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account ",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
