import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrBr1_LUYPvWseAM84R1iWXpWq-7c3c1Q",
  authDomain: "interviewiq-d92b7.firebaseapp.com",
  projectId: "interviewiq-d92b7",
  storageBucket: "interviewiq-d92b7.firebasestorage.app",
  messagingSenderId: "1092922970024",
  appId: "1:1092922970024:web:8b989e07e94faccdee979d",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };