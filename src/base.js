import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAGd-xzP98h4Lcz1DSQpxM-S2sr9WFr6M",
  authDomain: "catch-of-the-day-tim-cg.firebaseapp.com",
  databaseURL:
    "https://catch-of-the-day-tim-cg-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
