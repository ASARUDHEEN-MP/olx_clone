import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKfOBE7fhWMnBnojdQEbwOfhWq0-zIbfc",
  authDomain: "olxclone-df500.firebaseapp.com",
  projectId: "olxclone-df500",
  storageBucket: "olxclone-df500.appspot.com",
  messagingSenderId: "303305983749",
  appId: "1:303305983749:web:bafd824e683804e40a596c",
  measurementId: "G-NKFSNQ6EP7"
};

  export default firebase.initializeApp((firebaseConfig))