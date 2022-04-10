import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import initialAuthentication from "../Pages/Authentication/Firebase/Firebase.init";

initialAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();

    const signInWithGoogle = () => {

        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)



    }



    const createUserEmailPassword = (email, password, name) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                console.log(result.user);
                updateProfile(auth.currentUser, { displayName: name })

            })
            .catch((error) => {
                setUser(error.message);
            })
            .finally(() => setIsLoading(false))

    }
    const signInUserEmailPassword = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)


    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => setIsLoading(false))



        navigate("/login");
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);

        });

        return () => unsubscribe;

    }, [])

    return {
        signInWithGoogle,
        logOut,
        createUserEmailPassword,
        signInUserEmailPassword,
        isLoading,
        setError,
        error,
        user
    }



};

export default useFirebase;