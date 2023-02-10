import { InfoCircleFilled } from "@ant-design/icons";
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBKjo0-3mhTYPX7r9JhEAWGiKp86zGVSzk",
  authDomain: "chat-app-23186.firebaseapp.com",
  projectId: "chat-app-23186",
  storageBucket: "chat-app-23186.appspot.com",
  messagingSenderId: "232259327458",
  appId: "1:232259327458:web:db7bce5f97f74ba37815bb",
  measurementId: "G-R33983TJ3F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
// const db = firebase.firestore();
connectAuthEmulator(auth, "http://localhost:9099");
if (window.location.hostname === "localhost");
{
  connectFirestoreEmulator(db, "localhost", "8080");
}
export { auth, db };
export default firebase;
