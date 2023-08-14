import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const app = initializeApp({
  apiKey: "AIzaSyAKPo3ESSUikb5v5EIeUuPG4eqTJirmFVA",
  authDomain: "unichat-a82d9.firebaseapp.com",
  projectId: "unichat-a82d9",
  storageBucket: "unichat-a82d9.appspot.com",
  messagingSenderId: "1089977761540",
  appId: "1:1089977761540:web:9fc5e1095b2c8cf1171a51"
});

export const auth = getAuth(app);