// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6k-ec_VHjRVZF9HmT96cVZfrafgTkreo",
  authDomain: "the-dragon-news-ade1a.firebaseapp.com",
  projectId: "the-dragon-news-ade1a",
  storageBucket: "the-dragon-news-ade1a.appspot.com",
  messagingSenderId: "663614829966",
  appId: "1:663614829966:web:27041fb9c93b8c8bd020df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  default app;