import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import React, { useEffect } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// navbar fadein

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const fadeOutElement = document.querySelector('.navbar');

  if (scrollPosition > 10) { // Adjust this value as needed
    fadeOutElement.classList.add('fade-in');
  } else {
    fadeOutElement.classList.remove('fade-in');
  }
});



