import { initializeApp } from 'firebase/app';
import * as database from 'firebase/database';

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAE2bhpIF4Pl4X5xLvDHIvd1j_sFpMF6yM',
    authDomain: 'jisu-site.firebaseapp.com',
    databaseURL: 'https://jisu-site.firebaseio.com',
    projectId: 'jisu-site',
    storageBucket: 'jisu-site.appspot.com',
    messagingSenderId: '842432498065',
    appId: '1:842432498065:web:0732fa5c0b36ae79c33230'
};

const firebase = initializeApp(firebaseConfig);

// Get a reference to the database service
export default firebase;