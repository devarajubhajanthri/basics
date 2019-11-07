 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

 // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCcerPTBTBnzASJ0HEQ6qtFXNCsJPWlLVU",
    authDomain: "net-ninja-marioplan-7c56a.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-7c56a.firebaseio.com",
    projectId: "net-ninja-marioplan-7c56a",
    storageBucket: "net-ninja-marioplan-7c56a.appspot.com",
    messagingSenderId: "26059522890",
    appId: "1:26059522890:web:c89e18e702bdc0bbe137b3",
    measurementId: "G-ZTJP3Z8YGQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;