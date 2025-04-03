import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyB5UvKAHzUl-dFRnHqim9MC6YFO8JQmVtQ",
    authDomain: "emmsdan-dc7e6.firebaseapp.com",
    databaseURL: "https://emmsdan-dc7e6-default-rtdb.firebaseio.com",
    projectId: "emmsdan-dc7e6",
    storageBucket: "emmsdan-dc7e6.firebasestorage.app",
    messagingSenderId: "510742554950",
    appId: "1:510742554950:web:65432847a3033987709d47",
    measurementId: "G-ECP9E1CXP5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export { messaging, getToken, onMessage };
