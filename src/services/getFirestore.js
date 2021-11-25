import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOERp0J0uQFGqjGhsas9VFvi1LsFTj4QI",
    authDomain: "resto-jeyco-reactjs.firebaseapp.com",
    projectId: "resto-jeyco-reactjs",
    storageBucket: "resto-jeyco-reactjs.appspot.com",
    messagingSenderId: "498480810312",
    appId: "1:498480810312:web:318ffc5b0e8f694366cb7d"
}

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}