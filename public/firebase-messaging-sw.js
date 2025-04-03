importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyB5UvKAHzUl-dFRnHqim9MC6YFO8JQmVtQ",
  authDomain: "emmsdan-dc7e6.firebaseapp.com",
  projectId: "emmsdan-dc7e6",
  storageBucket: "emmsdan-dc7e6.firebasestorage.app",
  messagingSenderId: "510742554950",
  appId: "1:510742554950:web:65432847a3033987709d47",
  measurementId: "G-ECP9E1CXP5",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background Message Handling
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  });
});
