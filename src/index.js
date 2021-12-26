import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgrcTlotabFxkYemvplhluKpnF5dif9Ao",
  authDomain: "chat-react-ded82.firebaseapp.com",
  projectId: "chat-react-ded82",
  storageBucket: "chat-react-ded82.appspot.com",
  messagingSenderId: "693261415416",
  appId: "1:693261415416:web:97f65ca690ed3fa5e01c0d",
  measurementId: "G-CR2PZZXWCJ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export const Context = createContext(null)
const auth = app.auth();
const firestore = app.firestore();


ReactDOM.render(

  <React.StrictMode>
  <Context.Provider value ={{
    firebase,
    auth,
    firestore
  }}>
    <App />

  </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
