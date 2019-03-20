import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyDFdVMdKvsYZrE05j1wX29dzz5ExnF_ZzU",
    authDomain: "react-conncect-to-firebase.firebaseapp.com",
    databaseURL: "https://react-conncect-to-firebase.firebaseio.com",
    projectId: "react-conncect-to-firebase",
    storageBucket: "react-conncect-to-firebase.appspot.com",
    messagingSenderId: "430464758798"
};
firebase.initializeApp(config);

class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
  
  export default Firebase;