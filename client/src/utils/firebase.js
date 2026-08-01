
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "nterview-preparationiq.firebaseapp.com",
  projectId: "nterview-preparationiq",
  storageBucket: "nterview-preparationiq.firebasestorage.app",
  messagingSenderId: "582195559807",
  appId: "1:582195559807:web:39782fec638c607800ae4a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}