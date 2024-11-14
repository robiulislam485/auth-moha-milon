// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU4jST5EJFThTMlzqQhlm1ERdoozKuJdc",
  authDomain: "auth-moha-milon-60e38.firebaseapp.com",
  projectId: "auth-moha-milon-60e38",
  storageBucket: "auth-moha-milon-60e38.firebasestorage.app",
  messagingSenderId: "111787711935",
  appId: "1:111787711935:web:0b4cf901032f64e87d150a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;