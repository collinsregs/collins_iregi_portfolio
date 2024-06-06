import { useEffect, useRef, useState } from "react";

const Terminal = () => {
  const [input, setInput] = useState('');
  const keyboardRef = useRef();
  const outputRef = useRef();
  const textRef =useRef();


  const focusInput = () => {
    keyboardRef.current.focus();
  };
  function generateId() {
    return 'id' + Math.random().toString(16).slice(2);
  }

  const executeCommand = (command) => {
    let output;
    command = command.toLowerCase();
    if (command.length === 0) {
      return;
    }
    output = `<div class="terminal-line"><span class="success">PS C:\\Users\\colli</span> <span class="directory">&#62;</span> <span class="code">  ${command}</span></div>`;
    if (command === 'donut'){
      let id = generateId();
      output +=`<div class="terminal-line no-such"><pre id="${id}"></pre>
      <br></div>`;

    }else if (!COMMANDS.hasOwnProperty(command)) {
      output += `<div class="terminal-line no-such">No such command: <span class="output code">"${command}"</span>
      <br></div>`;
    } else {
      output += `<div class="output"> ${COMMANDS[command]} </div>`;
    }
    outputRef.current.innerHTML = `${outputRef.current.innerHTML}<div class="terminal-line">${output}</div>`;
    textRef.current.scrollIntoView({block: "end", inline: "nearest"});


  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Input is ', input);
      executeCommand(input);
      setInput('');
    } else {
      setInput(input + e.key);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 8 || e.keyCode === 46) {
      console.log(input);
      setInput(input.slice(0, input.length - 1));
      console.log(input);
    }
  };

  useEffect(() => {
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [input, handleKeyDown, handleKeyPress]);


  return (<div className=' terminal ' id="terminal">
  <div className="terminal-window"  onClick={focusInput}>
    <div className="terminal-top-ribbon">
    terminal text
    </div>
    <div className="terminal-text-area" ref={textRef}>
    <div ref={outputRef} className="terminal-output" id="terminalOutput">
              <div className="terminal-line">
                <span className="help-msg"
                  >Iregi PowerShell<br/>
                  Copyright (C) Iregi Collins. All rights reserved.<br/>
                  Type
                  <span className="code"> help</span> for a list of supported
                  commands.</span
                >
              </div>
      </div>
    <span  className="user-input" id="userInput"><span className="success">PS C:\Users\colli</span> <span className="directory"> 	&#62; </span><span className="code">  {input}</span></span>
    <input ref={keyboardRef} className="dummy-keyboard" id='dummy-keyboard'type="text" autoComplete="off"></input>
    
    </div>
  </div>
</div>
   
  );
};

export default Terminal;

let date = new Date();
let age = date.getFullYear()-2001;
let about = `I'm Collins Iregi. I’m a ${age} yr old developer currently living in the Kenya. I have a burning passion to want and help others with code that I create. I enjoy the limitless potential of impact that I can have with what I build. It is what pushes me every day to become a better developer.`;

const COMMANDS = {
  help:
    'Supported commands: ["<span class="code">about</span>", "<span class="code">experience</span>", "<span class="code">education</span>", "<span class="code">skills</span>", "<span class="code">contact</span>",<span class="code">donut</span>"]',
  about:
    "Hello 👋<br>"+ about,
  skills:
    '<span class="code">Languages:</span> HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, REST API\'s<br><span class="code">Frameworks:</span> React.js, Redux, GSAP, Sass, Vue.js',
  education:
    "B.Sc. Interactive Media & Technologies - Hanze University of Applied Sciences, Groningen",
  experience:
    "I'm currently working as a front-end developer at Storm Digital. My main areas of focus are helping our creative team build succesful digital creatives, and developing A/B tests for our CRO team.",
  contact:
    'You can contact me on any of the following links:<br>["<a target="_blank" rel="noopener noreferrer" href="https://github.com/twanmulder" class="social link">GitHub</a>", "<a target="_blank" rel="noopener noreferrer" href="https://medium.com/@toktoktwan" class="social link">Medium</a>", "<a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/toktoktwan/" class="social link">Twitter</a>"]',
  bob: "<span style='font-size: 2rem;'>🐕</span>",
};
