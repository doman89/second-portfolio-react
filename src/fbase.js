import firebase from "firebase/app";
import Rebase from "re-base";
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
});

const fbase = Rebase.createClass(firebaseApp.database());

export {firebaseApp, fbase};
