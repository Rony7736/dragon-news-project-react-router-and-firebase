// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpc4kXcd-rJ8xd8b2PjmjpEAX6lnUAD4k",
  authDomain: "dragon-news-f206f.firebaseapp.com",
  projectId: "dragon-news-f206f",
  storageBucket: "dragon-news-f206f.firebasestorage.app",
  messagingSenderId: "468893526176",
  appId: "1:468893526176:web:5aef33077eda64c2a7c1c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app