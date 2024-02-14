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


window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const fadeOutElement = document.querySelector('.terminal');

  if (scrollPosition > 5) { // Adjust this value as needed
    fadeOutElement.classList.add('fade-out');
  } else {
    fadeOutElement.classList.remove('fade-out');
  }
});
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const fadeOutElement = document.querySelector('.navbar');

  if (scrollPosition > 10) { // Adjust this value as needed
    fadeOutElement.classList.add('fade-in');
  } else {
    fadeOutElement.classList.remove('fade-in');
  }
});



window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const fadeOutElement = document.querySelector('.terminal');

  // Calculate the new height
  const newHeight = Math.max(80 - scrollPosition, 0); // Adjust these values as needed

  // Apply the new height to the element
  fadeOutElement.style.height = `${newHeight}vh`; // Use vh, px, etc. as needed
});

//terminal functionality
