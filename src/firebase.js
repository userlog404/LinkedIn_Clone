import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDu_kgw7Izmst963Hb7CRqyqV9vhIkUzIQ",
    authDomain: "linkedin-clone-3498e.firebaseapp.com",
    projectId: "linkedin-clone-3498e",
    storageBucket: "linkedin-clone-3498e.appspot.com",
    messagingSenderId: "296328169413",
    appId: "1:296328169413:web:c8e944a7639ed6ec74adac"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};