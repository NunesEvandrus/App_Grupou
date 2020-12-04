import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDTe2Lw7mqxgzX4L580_4-cjgN0boRFjzM",
    authDomain: "grupoununes.firebaseapp.com",
    projectId: "grupoununes",
    storageBucket: "grupoununes.appspot.com",
    messagingSenderId: "762761172508",
    appId: "1:762761172508:web:3632abed60617a5b4f31d9"
  };
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
