// Initialize Firebase
var config = {
    apiKey: "AIzaSyChL_hpnuDgrOYhYlVdZlq9wFk0kYMWqvo",
    authDomain: "gaveapp-f8150.firebaseapp.com",
    projectId: "gaveapp-f8150",
    storageBucket: "gaveapp-f8150.appspot.com",
    messagingSenderId: "237063439035",
    appId: "1:237063439035:web:8245200f5e761e26d69f9e",
    measurementId: "G-8ZSRNVFZER"
};

firebase.initializeApp(config);

// make auth and firestore references 
const auth = firebase.auth();
const db = firebase.firestore();

// update firestore settings
db.settings({
    timestampsInSnapshots: true
});