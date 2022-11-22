import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzFj-fCBfgoR8Zkdwlad3gZX5CHb8Rj94",
  authDomain: "clone-instagram-5eb25.firebaseapp.com",
  projectId: "clone-instagram-5eb25",
  storageBucket: "clone-instagram-5eb25.appspot.com",
  messagingSenderId: "1058745114099",
  appId: "1:1058745114099:web:21c37e43146803b8aac686"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)