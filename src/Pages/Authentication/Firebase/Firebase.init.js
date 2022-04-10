import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initialAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initialAuthentication;