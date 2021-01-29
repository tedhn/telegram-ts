import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC27u4Hv9lDuBSUlewx2it9TKHTxUSx5_0",
  authDomain: "telegram-clone-e7aac.firebaseapp.com",
  databaseURL: "https://telegram-clone-e7aac.firebaseio.com",
  projectId: "telegram-clone-e7aac",
  storageBucket: "telegram-clone-e7aac.appspot.com",
  messagingSenderId: "764839782855",
  appId: "1:764839782855:web:0eb41817624c1227c0d1e2",
  measurementId: "G-6RCN2R98SV",
});

const db = firebaseApp.firestore();

export default db;
