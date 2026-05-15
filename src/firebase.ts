import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuagICGs4fzfOscJmrE1HQmfGHIJcOibQ",
  authDomain: "uep-prmc.firebaseapp.com",
  projectId: "uep-prmc",
  storageBucket: "uep-prmc.firebasestorage.app",
  messagingSenderId: "200143474474",
  appId: "1:200143474474:web:ebcd582ab160840b9a5853"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);