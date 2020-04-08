import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCeyslqCNN3M6sjVn2NV9PZ_lxSt6PqmNg",
  authDomain: "ecommerce-f196b.firebaseapp.com",
  databaseURL: "https://ecommerce-f196b.firebaseio.com",
  projectId: "ecommerce-f196b",
  storageBucket: "ecommerce-f196b.appspot.com",
  messagingSenderId: "409849338547",
  appId: "1:409849338547:web:098128d8301bf231566ec6",
  measurementId: "G-DCJXQ1DHRC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const provider2 = new firebase.auth.FacebookAuthProvider();
provider2.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(provider2);

export default firebase;
