import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnb1vprim5fuiDqhF9m689OnbIcAiC3Ik",
  authDomain: "chat-app-2328a.firebaseapp.com",
  projectId: "chat-app-2328a",
  storageBucket: "chat-app-2328a.appspot.com",
  messagingSenderId: "651273290071",
  appId: "1:651273290071:web:37f89311114b00d72e7e12"
};

export const app = initializeApp(firebaseConfig);