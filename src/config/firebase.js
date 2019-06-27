import * as firebase from 'firebase';
import 'firebase/firestore';

const prodConfig = {
    apiKey: "AIzaSyD4Mu8bsVqZvZqofRmwuMRL0e4JtmlIy5s",
    authDomain: "943218161907-3qbh7dvqtgvbr3httbsnf9sgocf4cts0.apps.googleusercontent.com",
    databaseURL: "https://fir-poc-fc516.firebaseio.com",
    projectId: "fir-poc-fc516",
    storageBucket: "fir-poc-fc516.appspot.com",
    messagingSenderId: "943218161907"
};

const devConfig = {
    apiKey: "AIzaSyD4Mu8bsVqZvZqofRmwuMRL0e4JtmlIy5s",
    authDomain: "943218161907-3qbh7dvqtgvbr3httbsnf9sgocf4cts0.apps.googleusercontent.com",
    databaseURL: "https://fir-poc-fc516.firebaseio.com",
    projectId: "fir-poc-fc516",
    storageBucket: "fir-poc-fc516.appspot.com",
    messagingSenderId: "943218161907"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

firebase.initializeApp(config);
export const db = firebase.firestore();
//export const firebaseDatabase = firebase.database();
// export const firebaseAuth = firebase.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();