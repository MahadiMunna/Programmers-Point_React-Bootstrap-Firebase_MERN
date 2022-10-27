// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2XXlJv2qAbqr89CqmbOtnymCvki98Vp8",
  authDomain: "programmers-point.firebaseapp.com",
  projectId: "programmers-point",
  storageBucket: "programmers-point.appspot.com",
  messagingSenderId: "551462243413",
  appId: "1:551462243413:web:ac10a0876de92481ee18dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;