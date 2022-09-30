import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAN2H_TPI8SFXK3XU_SHoTpn5oKXjjLrgE",
    authDomain: "react-ecommerce-167e0.firebaseapp.com",
    projectId: "react-ecommerce-167e0",
    storageBucket: "react-ecommerce-167e0.appspot.com",
    messagingSenderId: "132394079496",
    appId: "1:132394079496:web:a4451043ecbc04b02388bd"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);