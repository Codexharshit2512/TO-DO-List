import firebase from 'firebase/app'
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAm1MC-cSEWuUItmTy02AX2eaY5xpsTyug",
    authDomain: "todo-list-d7d0c.firebaseapp.com",
    databaseURL: "https://todo-list-d7d0c.firebaseio.com",
    projectId: "todo-list-d7d0c",
    storageBucket: "todo-list-d7d0c.appspot.com",
    messagingSenderId: "688693460238",
    appId: "1:688693460238:web:718bf0de1c0361f261eb5f",
    measurementId: "G-LTFVS0H5H7"
})


export const auth = app.auth();
export default app;

