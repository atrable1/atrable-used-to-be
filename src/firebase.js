import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtAE4Jsi1C3XgnSjEXru-6OY8C_siEuFk",
  authDomain: "danijourney.firebaseapp.com",
  databaseURL: "https://danijourney.firebaseio.com",
  projectId: "danijourney",
  storageBucket: "danijourney.appspot.com",
  messagingSenderId: "173926213243",
  appId: "1:173926213243:web:82a5909feeb66e661164de",
  measurementId: "G-2P88F3MZBR",
};

export default firebase.initializeApp(firebaseConfig);
