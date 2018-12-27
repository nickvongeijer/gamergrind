import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA4WT86oZWvhGefXFE3yADE9T0Lj9awsZI",
    authDomain: "gamergrind-22541.firebaseapp.com",
    databaseURL: "https://gamergrind-22541.firebaseio.com",
    projectId: "gamergrind-22541",
    storageBucket: "gamergrind-22541.appspot.com",
    messagingSenderId: "119763921099"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timeStampsInSnapshots: true })

  export default firebase
