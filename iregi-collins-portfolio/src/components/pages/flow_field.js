import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";

const FlowField = () => {
  const canvasRef = useRef(null);
  const [numParticles, setNumParticles] = useState(1000); // Adjust particle count

  let scl, cols, rows;
  let flowfield;
  let particles = [];
  let zoff = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    new p5((p) => {
      p.setup = () => {
        p.createCanvas(window.outerWidth, window.outerHeight);
        scl = p.width / 300; // Adjust scale based on window size
        cols = Math.floor(p.width / scl);
        rows = Math.floor(p.height / scl);

        flowfield = new Array(cols * rows).fill(p.createVector(0, 0, 0));


        for (let i = 0; i < numParticles; i++) {
          particles[i] = new Particle(p,scl,cols, rows); // Pass p5 instance to Particle
        }

        
      };

      p.draw = () => {
        let yoff = 0;
        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            const index = x + y * cols;
            const angle = p.noise(xoff, yoff, zoff) * Math.PI * 4;
            const v = p.createVector(Math.cos(angle), Math.sin(angle));
            v.setMag(1);
            flowfield[index] = v;
            xoff += 0.1;
          }
          yoff += 0.1;
        }

        zoff += 0.0009;

        for (let i = 0; i < particles.length; i++) {
          particles[i].follow(flowfield);
          particles[i].update();
          particles[i].edges();
          particles[i].show(p); // Pass p5 instance to show method
        }
      };
    }, canvas);

    // Cleanup function to prevent memory leaks on unmount
    return () => {
      // Clean up any resources if needed
    };
  }, []);

  return (
    <div ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className="flowfield" />
  );
};
class Particle {
  constructor(p,scl, cols, rows) {
    this.p = p; // Reference to p5 instance
    this.pos = this.p.createVector(this.p.random(0, this.p.width), this.p.random(0, this.p.height));
    this.vel = this.p.createVector(0, 0);
    this.history = [];
    this.scl = scl; // Store scl for later use
    this.cols = cols; // Store cols for later use
    this.rows = rows;
  }

  follow(flowfield) {
    let x = Math.floor(this.pos.x / this.scl);
    let y = Math.floor(this.pos.y / this.scl);
    let index;
    // Wrap x and y values if they fall outside the grid boundaries
    x= (x+this.cols)% this.cols;
    y= (y+this.rows)% this.rows;

    index = x + y * this.cols;
    const force = flowfield[index];
    force.add(this.vel);
    force.limit(1); // Limit velocity magnitude

    this.vel = force;
    this.pos.add(this.vel);
  }

  update() {
    // Update particle history (optional)
    this.history.push(this.pos.copy()); // Keep track of past positions
    if (this.history.length > 100) { // Limit history length (optional)
      this.history.shift();
    }
  }

  edges() {
    // Wrap particle around canvas edges
    if (this.pos.x < 0) this.pos.x = this.p.width;
    if (this.pos.y < 0) this.pos.y = this.p.height;
    if (this.pos.x > this.p.width) this.pos.x = 0;
    if (this.pos.y > this.p.height) this.pos.y = 0;
  }

  show(p) {
    // Draw the particle (optional)
    p.fill(255, 255, 255, 100);; // Set fill color with opacity
    p.noStroke();
    p.ellipse(this.pos.x, this.pos.y, 1, 1); // Adjust size as desired
  }
}


export default FlowField;
