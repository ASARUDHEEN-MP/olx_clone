import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJ6MEalIlLr7ceJcopEDaqKuyBzfV1G1w",
    authDomain: "olxclone-69730.firebaseapp.com",
    projectId: "olxclone-69730",
    storageBucket: "olxclone-69730.appspot.com",
    messagingSenderId: "92755873466",
    appId: "1:92755873466:web:144da93dceba6043b8fc83",
    measurementId: "G-FM23HBL6KQ"
  };


  export default firebase.initializeApp((firebaseConfig))