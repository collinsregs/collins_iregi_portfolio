import React, { useState, useEffect } from 'react';

const Filler = () => {
  const [height, setHeight] = useState(85); // Initial height in vh
  const finalHeight = 10; // Desired final height as a percentage of vh (adjust)
  const scrollThresholdUp = 20; // Scroll threshold for expanding (adjust)
  const scrollThresholdDown = 10; // Scroll threshold for shrinking (adjust)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY;
//       const viewportHeight = window.innerHeight;

//       // Calculate scroll thresholds in pixels based on vh
//       const thresholdUpInPixels = (scrollThresholdUp / 100) * viewportHeight;
//       const thresholdDownInPixels = (scrollThresholdDown / 100) * viewportHeight;

//       if (scrolled <= thresholdUpInPixels) {
//         // User is scrolling up, expand the element
//         setHeight(Math.min(100, height + 1)); // Ensure maximum height of 100vh
//       } else if (scrolled >= thresholdDownInPixels) {
//         // User is scrolling down, shrink the element
//         const remainingScroll = document.documentElement.scrollHeight - scrolled;
//         const newHeight = Math.max(
//           finalHeight,
//           height - Math.min(remainingScroll, height - finalHeight)
//         );
//         setHeight(newHeight);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup function to remove event listener on unmount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  return <div className="filler" style={{ height: `${height}vh` }} />;
};

export default Filler;
