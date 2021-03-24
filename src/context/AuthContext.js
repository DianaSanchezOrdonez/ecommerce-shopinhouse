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
        return user
      })
      .catch((error) => console.log("error", error));
  };

  const signInEmailPassword = (email, password) => {
    console.log("email", email);
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        return user
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
    auth
      .signInWithPopup(provider)
      .then((result) => {
        return setDataUser({uid:result.user.uid, username: result.user.displayName, email: result.user.email})
      })
      .catch((error) => console.log("error", error));
    
      loginWithGoogle(dataUser)
  };

  const loginWithGoogle = (user) => {
    getFirestore()
    .collection("Users").add({
      id: user.uid,
      username: user.username,
      email : user.email
    })
    .then((docRef) => {
        console.log("User written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding User: ", error);
    });
  }

  if(currentUser) {
    getFirestore()
    .collection("Users")
    .where("id", "==", currentUser.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        return setDataUser({uid: doc.data().uid, username: doc.data().username, email: doc.data().email})
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
