
let userInput, terminalOutput;
const app = () => {
  console.log('running app')
  userInput = document.getElementById("userInput");
  console.log(userInput)
  terminalOutput = document.getElementById("terminalOutput");
  // document.getElementById("dummy-keyboard").focus();
};

if (document.readyState !== "loading") {
  app();
}


const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();

  if (input.length === 0) {
    return;
  }

  // "Secret" party command
  if (input === "party") {
    return;
  }

  // Another "Secret" command
  if (input === "sudo rm -rf") {
    return;
  }

  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
  } else {
    output += `<div class="output"> ${COMMANDS[input]} </div>`;
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};
const key = function keyEvent(e) {
    const input = userInput.innerHTML;
  
    if (e.key === "Enter") {
      execute(input);
      userInput.innerHTML = "";
      return;
    }
  
    userInput.innerHTML = input + e.key;
  }; 



const backspace = function backSpaceKeyEvent(userInput) {
  return function(e) {
    
    if (e.keyCode !== 8 && e.keyCode !== 46) {
      console.log(userInput)
      return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(
      0,
      userInput.innerHTML.length - 1
    );
    console.log(userInput)
  };
};


document.addEventListener("keydown", backspace(userInput));
document.addEventListener("keypress", key(userInput));



// TOP SECRET, DON'T READ




const COMMANDS = {
  help:
    'Supported commands: ["<span class="code">about</span>", "<span class="code">experience</span>", "<span class="code">education</span>", "<span class="code">skills</span>", "<span class="code">contact</span>"]',
  about:
    "Hello 👋<br>I'm Twan Mulder. I’m a 23 yr old web developer currently living in the Netherlands. I have a burning passion to want and help others with code that I create. I enjoy the limitless potential of impact that I can have with what I build. It is what pushes me every day to become a better developer.",
  skills:
    '<span class="code">Languages:</span> HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, REST API\'s<br><span class="code">Frameworks:</span> React.js, Redux, GSAP, Sass, Vue.js',
  education:
    "B.Sc. Interactive Media & Technologies - Hanze University of Applied Sciences, Groningen",
  experience:
    "I'm currently working as a front-end developer at Storm Digital. My main areas of focus are helping our creative team build succesful digital creatives, and developing A/B tests for our CRO team.",
  contact:
    'You can contact me on any of the following links:<br>["<a target="_blank" rel="noopener noreferrer" href="https://github.com/twanmulder" class="social link">GitHub</a>", "<a target="_blank" rel="noopener noreferrer" href="https://medium.com/@toktoktwan" class="social link">Medium</a>", "<a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/toktoktwan/" class="social link">Twitter</a>"]',
  bob: "<span style='font-size: 2rem;'>🐕</span>",
  party: "🎉🎉🎉",
  beer:
    '["<a target="_blank" rel="noopener noreferrer" href="https://anytimers.netlify.com" class="social link">Anytimers!</a>"]',
  "sudo rm -rf": ""
};





import React, { useEffect, useRef } from 'react';

function MyComponent() {
  const userInputRef = useRef();
  const dummyKeyboard = useRef();

  const keyEvent = (e) => {
    if(userInputRef.current){
      let input = userInputRef.current.innerHTML;
      if (e.key ==='Enter'){
        execute(input);
        userInputRef.current.innerHTML = '';
        return;
      }
      userInputRef.current.innerHTML = input + e.key;
    }
  };

  useEffect(() => {
    console.log(userInputRef.current);
    window.addEventListener('keydown', keyEvent);
    return () => {
      window.removeEventListener('keydown', keyEvent);
    };
  }, []);

  // ... rest of your component
}
output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
if (!COMMANDS.hasOwnProperty(input)) {
  output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
} else {
  output += `<div class="output"> ${COMMANDS[input]} </div>`;
}

terminalOutput.innerHTML = `${
  terminalOutput.innerHTML
}<div class="terminal-line">${output}</div>`;
terminalOutput.scrollTop = terminalOutput.scrollHeight;