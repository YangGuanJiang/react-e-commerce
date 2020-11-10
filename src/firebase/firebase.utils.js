import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD5X6Eln__Gg0ihhgVYaqV4FVqk0UfNFbY",
    authDomain: "ecommerce-fasion-db.firebaseapp.com",
    databaseURL: "https://ecommerce-fasion-db.firebaseio.com",
    projectId: "ecommerce-fasion-db",
    storageBucket: "ecommerce-fasion-db.appspot.com",
    messagingSenderId: "355336693446",
    appId: "1:355336693446:web:241975a3bd1f94fc7519c7",
    measurementId: "G-PZM0KT384E"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
