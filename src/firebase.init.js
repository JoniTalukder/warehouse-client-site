// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6xg_7v78rhhmnysbU5Xkm0Fgeuu_OgQI",
  authDomain: "simple-grocery-warehouse.firebaseapp.com",
  projectId: "simple-grocery-warehouse",
  storageBucket: "simple-grocery-warehouse.appspot.com",
  messagingSenderId: "178871849710",
  appId: "1:178871849710:web:c92c1ebb881e209847d9ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;