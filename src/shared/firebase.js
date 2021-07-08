import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDSNVcNhAYMCNCK3AmvzXaOarcZH_yghP0",
    authDomain: "coffeecommunity-38210.firebaseapp.com",
    projectId: "coffeecommunity-38210",
    storageBucket: "coffeecommunity-38210.appspot.com",
    messagingSenderId: "201882355716",
    appId: "1:201882355716:web:b74a1082f9b403a5758d51",
    measurementId: "G-YQ2W6P1BEL"
}

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
export{ auth, firestore, apiKey, storage };