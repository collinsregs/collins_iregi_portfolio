import { useEffect, useRef, useState } from "react";
export default function Terminal(){


   const [userInput,setUserInput]=useState('')
   const dummyKeyboard = useRef()
   const terminalOutput = useRef()

function focus(){
  console.log(dummyKeyboard.current)
  dummyKeyboard.current.focus()
}
const execute = function executeCommand(input){
  let output
  console.log("excecuting input")
  input = input.toLowerCase()
  if(input.length ===0){
    return
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
  } else {
    output += `<div class="output"> ${COMMANDS[input]} </div>`;
  }

  terminalOutput.current.innerHTML = `${
    terminalOutput.current.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.current.scrollTop = terminalOutput.current.scrollHeight;
};

const key = function keyEvent(e){

  
  
    
  if (e.key ==='Enter'){
    execute(userInput)
    setUserInput('')
    return
  }
  setUserInput(userInput + e.key)

}
const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  setUserInput(userInput.slice(0,userInput.length-1))
};

useEffect(()=>{
document.addEventListener("keydown",backspace)
document.addEventListener("keypress",key)
},[backspace, key])






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
    return <div className=' terminal '>
        <div className="terminal-window"  onClick={focus}>
          <div className="terminal-top-ribbon">
          terminal text
          </div>
          <div className="terminal-text-area">
          <div ref={terminalOutput} className="terminal-output" id="terminalOutput">
                    <div className="terminal-line">
                      <span className="help-msg"
                        >Welcome to my portfolio! — Type
                        <span className="code">help</span> for a list of supported
                        commands.</span
                      >
                    </div>
            </div>
          <span  className="user-input" id="userInput"> {userInput}</span>
          <input ref={dummyKeyboard} className="dummy-keyboard" id='dummy-keyboard'type="text" autoComplete="off"></input>
          </div>
        </div>
    </div>
}