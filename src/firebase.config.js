// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWffVxR4sb5zTYfEvShfYdQszbHse4-L8",
  authDomain: "online-job-portal-31646.firebaseapp.com",
  projectId: "online-job-portal-31646",
  storageBucket: "online-job-portal-31646.appspot.com",
  messagingSenderId: "624584920657",
  appId: "1:624584920657:web:de9b8528544ca69df83270"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};