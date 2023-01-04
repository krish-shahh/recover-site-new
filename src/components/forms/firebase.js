import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyC9EuRuzQLO_RX2tEsDWb8t5eTPrCN9RXo",
  authDomain: "recover-new.firebaseapp.com",
  projectId: "recover-new",
  storageBucket: "recover-new.appspot.com",
  messagingSenderId: "375780558451",
  appId: "1:375780558451:web:4a4456a52a09194f1fcc06"
};
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;