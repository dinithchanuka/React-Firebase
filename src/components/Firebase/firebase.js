import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDFdVMdKvsYZrE05j1wX29dzz5ExnF_ZzU",
    authDomain: "react-conncect-to-firebase.firebaseapp.com",
    databaseURL: "https://react-conncect-to-firebase.firebaseio.com",
    projectId: "react-conncect-to-firebase",
    storageBucket: "react-conncect-to-firebase.appspot.com",
    messagingSenderId: "430464758798"
};

class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
    }
      // *** Auth API ***

 doCreateUserWithEmailAndPassword = (email, password) =>
 this.auth.createUserWithEmailAndPassword(email, password);

doSignInWithEmailAndPassword = (email, password) =>
 this.auth.signInWithEmailAndPassword(email, password);

doSignOut = () => this.auth.signOut();

doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

doPasswordUpdate = password =>
 this.auth.currentUser.updatePassword(password);
  }
  export default Firebase;