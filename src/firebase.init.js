// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBf-6XuJo5lSKMOTo8bUG5FVKzrYEf2Zxo",
    authDomain: "car-shop-project-dc219.firebaseapp.com",
    projectId: "car-shop-project-dc219",
    storageBucket: "car-shop-project-dc219.appspot.com",
    messagingSenderId: "67716080790",
    appId: "1:67716080790:web:4097f8c8a141d1fd5eceb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth