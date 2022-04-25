// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw-LfETHHfXnnZJMyCLT2pUxoRlGCi_ec",
  authDomain: "genius-car-service-orignal.firebaseapp.com",
  projectId: "genius-car-service-orignal",
  storageBucket: "genius-car-service-orignal.appspot.com",
  messagingSenderId: "1088570679791",
  appId: "1:1088570679791:web:2adb6a082e6438fa5e961a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
