import "firebase/compat/database";
import firebase from "firebase/compat/app";
const todosRef = {
  apiKey: "AIzaSyA3Zi6c4uCUVOCN9Kg9jAu0QaCk82P9Veg",
  authDomain: "cultivated-cove-339803.firebaseapp.com",
  databaseURL: "https://cultivated-cove-339803-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cultivated-cove-339803",
  storageBucket: "cultivated-cove-339803.appspot.com",
  messagingSenderId: "338075519216",
  appId: "1:338075519216:web:b8d65c2ed900db97bdda35",
  measurementId: "G-2WZMLF7EDT"
};
const fireDb = firebase.initializeApp(todosRef);
export default fireDb.database().ref();