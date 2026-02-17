import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbrxYLSPuXM3GD8CV9pL1tP_YxI0NUTZ8",
  authDomain: "sanobazar-63b9a.firebaseapp.com",
  projectId: "sanobazar-63b9a",
  storageBucket: "sanobazar-63b9a.firebasestorage.app",
  messagingSenderId: "988582870491",
  appId: "1:988582870491:web:e0ac8e0538aeb254f97bfe",
  measurementId: "G-0JZ4ZEF3KY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);