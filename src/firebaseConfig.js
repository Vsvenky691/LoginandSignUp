import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmGSS9Fn_QzQzABv7Ksw5uEfs7q6qDi8U",
  authDomain: "fir-694f3.firebaseapp.com",
  projectId: "fir-694f3",
  storageBucket: "fir-694f3.appspot.com",
  messagingSenderId: "108316815254",
  appId: "1:108316815254:web:b3272c674a86437856f7b7",
  measurementId: "G-DN5TQR1Z6N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);