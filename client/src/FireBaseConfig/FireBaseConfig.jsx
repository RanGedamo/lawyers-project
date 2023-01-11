import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { useDispatch } from "react-redux";
import {
  userDateStore,
  facebookSignInStore,
  googleSignInStore,
  logOutStore,
} from "../store/userReducer.js";
import { useContext, createContext, useEffect, useState } from "react";

export const FireBaseConfig = () => {
  const dispatch=useDispatch()
  const [user, setUser] = useState({});


  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const facebookSignIn = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
   
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const data={
        google:googleSignIn,
        facebook:facebookSignIn,
        logOut:logOut,
        currentUser:currentUser
          }
      setUser( data );
    });
    return () => {
      unsubscribe();
    };
   
  }, []);

  dispatch(userDateStore(user))
};
