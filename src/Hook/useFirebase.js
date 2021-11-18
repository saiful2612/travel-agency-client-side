import { useEffect, useState } from "react";
import intializeAuthentication from "../Firebase/firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

intializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  //const[error, setError] =useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, [auth]);

  const setUsername = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const handleCustomRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleCustomLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return {
    user,
    handleGoogleSignIn,
    handleCustomRegistration,
    handleCustomLogIn,
    setUsername,
    logout,
    loading,
  };
};

export default useFirebase;
