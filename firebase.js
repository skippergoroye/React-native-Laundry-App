import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgJDagDMXEzi0hCUDkF6ynpHL1r4WZBlU",
  authDomain: "laundry-app-aadfe.firebaseapp.com",
  projectId: "laundry-app-aadfe",
  storageBucket: "laundry-app-aadfe.appspot.com",
  messagingSenderId: "1038597979972",
  appId: "1:1038597979972:web:15f187f2262deec8372111"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);