// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

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
export const databaseCollection = collection(db, "users")
// const analytics = getAnalytics(app);

//crear una coleccion en la base para guardar usuarios



// const cargarData = async()=>{
//   try {
//     setDoc(docuRef , {
//       name: "Alejandra",
//       Email: "maamartinez@unal.edu.co",
//       rol: "Admin",
//     })
    
//   } catch (error) {
//       console.log(error)
//   }

// }

// cargarData();


// const generarBase = async ()=>{
//   try {
//     const docRef = await addDoc(databaseCollection, {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }

// }
// generarBase();




export default app;