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


// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   const fadeOutElement = document.querySelector('.terminal');

//   if (scrollPosition > 5) { // Adjust this value as needed
//     fadeOutElement.classList.add('fade-out');
//   } else {
//     fadeOutElement.classList.remove('fade-out');
//   }
// });




window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const fadeOutElement = document.querySelector('.navbar');

  if (scrollPosition > 10) { // Adjust this value as needed
    fadeOutElement.classList.add('fade-in');
  } else {
    fadeOutElement.classList.remove('fade-in');
  }
});



// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   const fadeOutElement = document.querySelector('.terminal');

//   // Calculate the new height
//   const newHeight = Math.max(80 - scrollPosition, 0); // Adjust these values as needed

//   // Apply the new height to the element
//   fadeOutElement.style.height = `${newHeight}vh`; // Use vh, px, etc. as needed
// });

// window.onscroll = function() {
//   var scrollHeight = document.documentElement.scrollHeight;
//   var clientHeight = document.documentElement.clientHeight;
//   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

//   var opacity = 1 - (scrollPosition / (scrollHeight - clientHeight))*1.5;
//   var scale = Math.max(opacity, 0.2); // Adjust the minimum scale (0.5 here) as needed

//   var terminal = document.getElementById('terminal');
//   terminal.style.opacity = opacity;
//   terminal.style.transform = 'scale(' + scale + ')';
// };

// var c = document.getElementById("canvas");
// console.log(c)
// var ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

function donut(id) {
  var pretag = document.getElementById(`${id}`);
  var tmr1 = undefined;
  var A = 1,
    B = 1;

  // This is copied, pasted, reformatted, and ported directly from my original
  // donut.c code
  var asciiframe = function () {
    var b = [];
    var z = [];
    A += 0.07;
    B += 0.03;
    var cA = Math.cos(A),
      sA = Math.sin(A),
      cB = Math.cos(B),
      sB = Math.sin(B);
    for (var k = 0; k < 1760; k++) {
      b[k] = k % 80 === 79 ? "\n" : " ";
      z[k] = 0;
    }
    for (var j = 0; j < 6.28; j += 0.07) {
      // j <=> theta
      var ct = Math.cos(j),
        st = Math.sin(j);
      for (var i = 0; i < 6.28; i += 0.02) {
        // i <=> phi
        var sp = Math.sin(i),
          cp = Math.cos(i),
          h = ct + 2, // R1 + R2*cos(theta)
          D = 1 / (sp * h * sA + st * cA + 5), // this is 1/z
          t = sp * h * cA - st * sA; // this is a clever factoring of some of the terms in x' and y'

        var x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
          y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
          o = x + 80 * y,
          N =
            0 |
            (8 *
              ((st * sA - sp * ct * cA) * cB -
                sp * ct * sA -
                st * cA -
                cp * ct * sB));
        if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
          z[o] = D;
          b[o] = "collins iregi portfolio"[N > 0 ? N : 0];
        }
        //.,-~:;=!*#$@
      }
    }
    pretag.innerHTML = b.join("");
    pretag.setAttribute('data-updated-by', 'donut');
  };

  window.anim1 = function () {
    if (tmr1 === undefined) {
      tmr1 = setInterval(asciiframe, 60);
    } else {
      clearInterval(tmr1);
      tmr1 = undefined;
    }
  };
  asciiframe();
  window.anim1();
}


// let checkElement = setInterval(function() {
//   console.log("looking for donut")
//   if (document.getElementById('d')) {
//     console.log('Element is now loaded');
//     donut();
//     clearInterval(checkElement);
//   }
// }, 100)

var pre_elements
// Function to get ids of all pre elements
function getPreElementIds() {
  let preElements = document.querySelectorAll('pre');
  // console.log(preElements)
  let ids = Array.from(preElements).map(element => element.id);
  return ids;
}

let _pre_elements; // private variable
let value_length
// Define a getter and setter for pre_elements
Object.defineProperty(window, 'pre_elements', {
  get: function() {
    return _pre_elements;
  },
  set: function(value) {
    value_length = _pre_elements ? _pre_elements.length : 0;

    _pre_elements = value;

      if(_pre_elements.length !== value_length){
        value_length = _pre_elements.length;
        // observer.disconnect();
        console.log("run donut")
         donut(_pre_elements[_pre_elements.length-1])}
        //  observer.observe(document.body, { childList: true, subtree: true }); 

  }
});

// Set up the MutationObserver
let observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    
    if (mutation.addedNodes.length || mutation.removedNodes.length) {
      // console.log("changes made")
      // If nodes have been added or removed, update the pre_elements variable
      window.pre_elements = getPreElementIds();
      // console.log(window.pre_elements)
    }
  });
});

// Start observing the document body for child list changes
observer.observe(document.body, { childList: true, subtree: true });



