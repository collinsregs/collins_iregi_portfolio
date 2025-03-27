import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import React, { useEffect } from 'react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// navbar fadein

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const navElement = document.querySelector(".navbar");
  const ctaElement = document.querySelector(".cta");

  if (scrollPosition > 10) {
    navElement.classList.add("nav-active");
    ctaElement.classList.remove("nav-active");
  } else {
    navElement.classList.remove("nav-active");
    ctaElement.classList.add("nav-active");
  }
});
