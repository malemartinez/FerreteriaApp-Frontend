// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { doc } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD69T7sDS5qQtxf4j5IU2m1_oxSQO3a24",
  authDomain: "ferreteriaapp-6fc3d.firebaseapp.com",
  projectId: "ferreteriaapp-6fc3d",
  storageBucket: "ferreteriaapp-6fc3d.appspot.com",
  messagingSenderId: "905938996133",
  appId: "1:905938996133:web:71cc9f7fb94057a12d364c",
  measurementId: "G-1ZN0138L5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

//crear una coleccion en la base para guardar usuarios
export const docuRef = doc(db, `usuarios/user`);
// export const databaseCollection = collection(db, "users")


export default app;