import * as firebase from 'firebase';

// Initialize Firebase
 var config = {

  };

export const firebaseApp = firebase.initializeApp(config);
export const users = firebaseApp.database().ref().child('users');
export const usersWishlist = firebaseApp.database().ref().child('usersWishlist');