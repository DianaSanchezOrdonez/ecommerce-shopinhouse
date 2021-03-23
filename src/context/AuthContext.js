import React, { createContext, useState, useEffect } from "react";

/*-------------------AUTHENTICATION FIREBASE----------------------------*/
import { auth, provider } from "../firebase/index";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  console.log('currentUser', currentUser)

  const createEmailPassword = (email, password) => {
    console.log("email", email);
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("user", user);
      })
      .catch((error) => console.log("error", error));
  };

  const signInEmailPassword = (email, password) => {
    console.log("email", email);
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("user", user);
      })
      .catch((error) => console.log("error", error));
  };

  const signOut = () => {
    return auth
      .signOut()
      .then(() => {
        console.log("SignOut...");
      })
      .catch((error) => console.log("error", error));
  };

  const signInWithGoogle = () => {
    
    return auth
      .signInWithPopup(provider)
      .then((result) => {
        let credential = result.credential;
        let token = credential.accessToken;
        let user = result.user;

        console.log("user with google", user);
      })
      .catch((error) => console.log("error", error));
  };

  return(
      <AuthContext.Provider
        value={{
            methodsAuth: {createEmailPassword, signInEmailPassword, signOut, signInWithGoogle}
        }}
      >
        {children}
      </AuthContext.Provider>
  );
};

export default AuthContextProvider;
