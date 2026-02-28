
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mauro-react.firebaseapp.com",
  projectId: "mauro-react",
  storageBucket: "mauro-react.firebasestorage.app",
  messagingSenderId: "199713650678",
  appId: import.meta.env.VITE_FIREBASE_API_APPID
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)