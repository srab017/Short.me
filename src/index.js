import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyANaQrX96gRfCJmymWXdkHE9E-jbMXjlE0",
  authDomain: "short-me-e0b4b.firebaseapp.com",
  projectId: "short-me-e0b4b",
  storageBucket: "short-me-e0b4b.appspot.com",
  messagingSenderId: "913187313268",
  appId: "1:913187313268:web:3bc5fa9099d3e45a04e321",
  measurementId: "G-EN3E556K9P"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
