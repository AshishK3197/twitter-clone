import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCollld1v7ybcuO1pqilt93BSU7KSp4UKo",
	authDomain: "twitter-clone-bf100.firebaseapp.com",
	projectId: "twitter-clone-bf100",
	storageBucket: "twitter-clone-bf100.appspot.com",
	messagingSenderId: "1084877853131",
	appId: "1:1084877853131:web:c4d6bdf7ff22f01ef1664e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
