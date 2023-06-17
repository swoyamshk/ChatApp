import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDuNuEAosqE9guT9ky-vQnvzxGEMoEsBGM",
    authDomain: "chatit-3c00a.firebaseapp.com",
    projectId: "chatit-3c00a",
    storageBucket: "chatit-3c00a.appspot.com",
    messagingSenderId: "389534424203",
    appId: "1:389534424203:web:c8523f6a037cabf05b888e"
  }).auth();