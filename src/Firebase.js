import * as firebase from 'firebase';

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyBDcZ7Rdcvm3NXPUyiD-c5tWDklV5C3_-w",
    authDomain: "todo-test-97a27.firebaseapp.com",
    databaseURL: "https://todo-test-97a27.firebaseio.com",
    projectId: "todo-test-97a27",
    storageBucket: "todo-test-97a27.appspot.com",
    messagingSenderId: "667892054233"
  };

export const firebaseApp = firebase.initializeApp(config);
export const users = firebaseApp.database().ref().child('users');
export const usersWishlist = firebaseApp.database().ref().child('usersWishlist');