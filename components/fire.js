import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCMVTXOEs4KXxOzCpEgrTdwJPfB0RZ8RzM",
    authDomain: "thirota-next-app-second.firebaseapp.com",
    projectId: "thirota-next-app-second",
    storageBucket: "thirota-next-app-second.appspot.com",
    messagingSenderId: "754201638143",
    appId: "1:754201638143:web:b3aafd09d17e342eb5c8ca"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}