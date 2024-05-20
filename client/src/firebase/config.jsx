import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCeNfbjz1ZX6yRZDtN3Gw_VNuhaNIZ98aQ",
    authDomain: "chatapp-4b857.firebaseapp.com",
    projectId: "chatapp-4b857",
    storageBucket: "chatapp-4b857.appspot.com",
    messagingSenderId: "914672123958",
    appId: "1:914672123958:web:7d2b87a851b3369bc59897"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
