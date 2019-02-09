import firebase from "firebase/app";
import Rebase from "re-base";
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfhz3Dt-D2rd0uLsqVKUf_JV1_YxfLiI8",
    authDomain: "my-portfolio-content.firebaseapp.com",
    databaseURL: "https://my-portfolio-content.firebaseio.com",
    projectId: "my-portfolio-content",
    storageBucket: "my-portfolio-content.appspot.com",
    messagingSenderId: "913619819227"
});

const fbase = Rebase.createClass(firebaseApp.database());

export {firebaseApp, fbase};
