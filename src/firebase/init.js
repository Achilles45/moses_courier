import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUaGG6SN8GXnslYxk94qmVnye-FC6Rpnk",
  authDomain: "moses-courier.firebaseapp.com",
  databaseURL: "https://moses-courier.firebaseio.com",
  projectId: "moses-courier",
  storageBucket: "moses-courier.appspot.com",
  messagingSenderId: "807835492235",
  appId: "1:807835492235:web:6077840e5d6d44fe9a198e",
  measurementId: "G-C7CEWTKSKR"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();