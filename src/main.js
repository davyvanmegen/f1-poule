import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDArAdZE8bdfyrd261B_bnXNIkt9RT-w6c",
  authDomain: "f1-poule-41708.firebaseapp.com",
  projectId: "f1-poule-41708",
  storageBucket: "f1-poule-41708.appspot.com",
  messagingSenderId: "23674125297",
  appId: "1:23674125297:web:12fbf600630b0b4b78a250"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
