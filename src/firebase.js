import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.envREACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_BASEURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export const createEmailPassword = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

//sign in
firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
export const signIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const signOutUser = () =>
  firebase
    .auth()
    .signOut()
    .then(function () {
      //sign-out successfully
      console.log("signed Out");
    })
    .catch(function (error) {
      //an error happened
    });

//sign out
// export const signOut = () => {
//   return auth.signOut();
// };

//password reset
export const passwordUpdate = (email) => {
  return auth.sendPasswordResetEmail(email);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firebase;
