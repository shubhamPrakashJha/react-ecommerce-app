import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBpiYspCj15BqcZtU4I4X_6w2-cnB0yDbA",
	authDomain: "ecomm-db-5a547.firebaseapp.com",
	databaseURL: "https://ecomm-db-5a547.firebaseio.com",
	projectId: "ecomm-db-5a547",
	storageBucket: "ecomm-db-5a547.appspot.com",
	messagingSenderId: "304509442623",
	appId: "1:304509442623:web:dbe112d96bb6c36beef68a",
	measurementId: "G-9YTHQVGH44"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promot: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
