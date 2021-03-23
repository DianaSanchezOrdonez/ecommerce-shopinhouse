import React, { createContext, useState, useEffect } from "react";

/*-------------------AUTHENTICATION FIREBASE----------------------------*/
import { auth, provider, getFirestore } from "../firebase/index";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [dataUser, setDataUser] = useState()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, []) 

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

  if(currentUser) {
    getFirestore()
    .collection("Users")
    .where("id", "==", currentUser.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        return setDataUser({username: doc.data().username, email: doc.data().email})
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }else{
    console.log('loguearse....')
  }

  return(
      <AuthContext.Provider
        value={{
            dataUser,
            currentUser,
            methodsAuth: {createEmailPassword, signInEmailPassword, signOut, signInWithGoogle}
        }}
      >
        {children}
      </AuthContext.Provider>
  );
};

export default AuthContextProvider;
