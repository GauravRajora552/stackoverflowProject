import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyXOtHOra5-rR1-hdB1A7E6j-w5L72Ocg",
  authDomain: "otp-stackoverflow.firebaseapp.com",
  projectId: "otp-stackoverflow",
  storageBucket: "otp-stackoverflow.appspot.com",
  messagingSenderId: "267211859278",
  appId: "1:267211859278:web:7f71da13ec9e2b0c96ea1f",
  measurementId: "G-DF586FFK7Q"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);