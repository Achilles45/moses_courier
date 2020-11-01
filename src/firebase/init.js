import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvnjt_vebv4r4IQw7w69UzvH0JsFQ_mZ8",
  authDomain: "courier-e0196.firebaseapp.com",
  databaseURL: "https://courier-e0196.firebaseio.com",
  projectId: "courier-e0196",
  storageBucket: "courier-e0196.appspot.com",
  messagingSenderId: "102945703772",
  appId: "1:102945703772:web:6e24effd6b0b1d3fe36399",
  measurementId: "G-GCXSCBS4H8"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();