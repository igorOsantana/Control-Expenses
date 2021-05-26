import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBC9TSnPByJ29Zih8_6oTjPn6lwWhpfROk",
    authDomain: "masraf-1c21a.firebaseapp.com",
    projectId: "masraf-1c21a",
    storageBucket: "masraf-1c21a.appspot.com",
    messagingSenderId: "670638955694",
    appId: "1:670638955694:web:8d3160781af40c95f0a13f"
};
// Initialize Firebase
export default firebase.initializeApp( firebaseConfig );