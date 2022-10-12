import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyDuSIHGJpmU3B-wyKgGWvvAgNH53ujFNoU",
    authDomain: "chat-react-app-66ad9.firebaseapp.com",
    databaseURL: "https://chat-react-app-66ad9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-react-app-66ad9",
    storageBucket: "chat-react-app-66ad9.appspot.com",
    messagingSenderId: "199047388165",
    appId: "1:199047388165:web:99058fc48e721a5ebb906c"
  };

  const firebaseDB = firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.database();