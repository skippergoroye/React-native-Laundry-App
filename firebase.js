import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9YO835FIWULX24mpoGqseVQYuj_OWJxU",
  authDomain: "laundry-app-c4f21.firebaseapp.com",
  projectId: "laundry-app-c4f21",
  storageBucket: "laundry-app-c4f21.appspot.com",
  messagingSenderId: "130952968196",
  appId: "1:130952968196:web:9539c9a2f93ad8300e5d51"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);