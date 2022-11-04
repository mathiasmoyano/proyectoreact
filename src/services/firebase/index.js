import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDjcxkUwh-WiWK2Bg7dyGjY7D55xnzi5IY",
  authDomain: "backendescape.firebaseapp.com",
  projectId: "backendescape",
  storageBucket: "backendescape.appspot.com",
  messagingSenderId: "116111231417",
  appId: "1:116111231417:web:f1dea092069be5ebf84e68"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)