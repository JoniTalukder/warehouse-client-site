// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtDCg4dX-Xgg81juJ0nbbpjkdl3AlOLm4",
  authDomain: "grocery-warehouse-b4c3a.firebaseapp.com",
  projectId: "grocery-warehouse-b4c3a",
  storageBucket: "grocery-warehouse-b4c3a.appspot.com",
  messagingSenderId: "966825393119",
  appId: "1:966825393119:web:e1328416cec24b5a01a26a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;