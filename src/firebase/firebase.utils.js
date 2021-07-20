import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAVio5F6Cxu5aROgaUJKWerUQ9DJymXnzk",
  authDomain: "crwn-db-51826.firebaseapp.com",
  projectId: "crwn-db-51826",
  storageBucket: "crwn-db-51826.appspot.com",
  messagingSenderId: "320294520095",
  appId: "1:320294520095:web:98a20eb83c8a0370ba9c2a",
  measurementId: "G-9W9PK8V3LH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
