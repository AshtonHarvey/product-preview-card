import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div class="bg-black flex flex-col items-center justify-center" >
    <div class="flex justify-center items-center w-screen ">
      <a class="w-1/3 flex justify-center" href="https://vitejs.dev" target="_blank">
        <img  src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a class="w-1/3 flex justify-center href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
    <h1>Hello Vite!</h1> 
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
