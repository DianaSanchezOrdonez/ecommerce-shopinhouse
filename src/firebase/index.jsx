import firebase from 'firebase/app';
import '@firebase/firestore';

// Your web app's Firebase configuration and Initialize Firebase
const app = firebase.initializeApp ({
  apiKey: "AIzaSyBwBmJ0YayE2b-iX3Qgj-l19FWF3-z6Yro",
  authDomain: "bd-ecommerce-b27da.firebaseapp.com",
  projectId: "bd-ecommerce-b27da",
  storageBucket: "bd-ecommerce-b27da.appspot.com",
  messagingSenderId: "482747867659",
  appId: "1:482747867659:web:4e1d56c3a4d29e38755d0e",
});

export const getFirebase = () => {
    return app;
}

//Reference of the database
export const getFirestore = () => {
    return firebase.firestore(app);
}

export const createUserPassword = (email, password) => {
  firebase.auth(app).createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log('user', user)
  })
  .catch((error) => console.log('error', error));
}