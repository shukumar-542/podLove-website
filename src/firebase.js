import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI5-xy2mwhsarDgQnEjeF7SxwNDUF5GfI",
  authDomain: "podlove-4d1d2.firebaseapp.com",
  projectId: "podlove-4d1d2",
  storageBucket: "podlove-4d1d2.firebasestorage.app",
  messagingSenderId: "471587701955",
  appId: "1:471587701955:web:dd33e3e20883326024ce76",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
