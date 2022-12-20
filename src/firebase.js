import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore, collection, addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbnChhruBEPcqfe2ZY1eyR1EEUmRE-ZPY",
  authDomain: "react-authentication-e352f.firebaseapp.com",
  projectId: "react-authentication-e352f",
  storageBucket: "react-authentication-e352f.appspot.com",
  messagingSenderId: "768071785988",
  appId: "1:768071785988:web:2141f1e0f37ca72658df51",
  measurementId: "G-9H3PJSL1ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Intialize auth
export const auth = getAuth(app);

// Intialize firestore
export const db = getFirestore();

export const createUserDoc = async (user,otherData) => {
  if(!user) return ;
  // const userRef = await getDocs(collection(db, "user"));
  const {email} = user.user;
  const {displayName} = otherData;
  const docRef = collection(db,'user');
  addDoc(docRef,{
    userId:user.user.uid,
    email:email,
    displayName:displayName,
    role:"User"
  })
  .then((data) => {
    console.log("Data is created with => ",data);
  })
}

export default app;
