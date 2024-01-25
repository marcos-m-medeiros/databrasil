import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQgU6JocIkpl2K3Olla6psYmjYJ0ZQQ94",
  authDomain: "rn-auth-96f0b.firebaseapp.com",
  projectId: "rn-auth-96f0b",
  storageBucket: "rn-auth-96f0b.appspot.com",
  messagingSenderId: "1004795731748",
  appId: "1:1004795731748:web:143b4096ae912879311db1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
