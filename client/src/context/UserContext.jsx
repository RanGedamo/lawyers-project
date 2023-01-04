import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider
} from 'firebase/auth';
import {auth} from '../firebase/firebase.js';
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
   return signInWithPopup(auth, googleProvider);
    // return signInWithRedirect(auth, googleProvider)
  };
  const facebookSignIn = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
    // signInWithRedirect(auth, facebookProvider)
  };

  const logOut = () => {
      signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log( currentUser)
    });

    return () => {
      unsubscribe();
    };

  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn,facebookSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};