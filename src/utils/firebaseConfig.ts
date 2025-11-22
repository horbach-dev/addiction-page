import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const {
  VITE_FIREBASE_API_KEY = '',
  VITE_FIREBASE_AUTH_DOMAIN = '',
  VITE_FIREBASE_PROJECT_ID = '',
  VITE_FIREBASE_STORAGE = '',
  VITE_FIREBASE_MESSAGING_ID = '',
  VITE_FIREBASE_APP_ID = '',
  VITE_FIREBASE_MEASUREMENT_ID = '',
} = import.meta.env

export const initFirebase = initializeApp({
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE,
  messagingSenderId: VITE_FIREBASE_MESSAGING_ID,
  appId: VITE_FIREBASE_APP_ID,
  measurementId: VITE_FIREBASE_MEASUREMENT_ID
});

export const db = getFirestore(initFirebase);
