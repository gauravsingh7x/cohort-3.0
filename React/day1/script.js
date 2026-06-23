// console.log(React);
// console.log(window);

// JavaScript here > Real DOM
let h1 = document.createElement("h1");
h1.textContent = "I'm Real DOM";
document.body.append(h1);
// Create <h1>
// Set text
// Append to DOM immediately
// Browser updates the DOM right away.

// console.log("Hi Real DOM", h1);

//React here > Virtual DOM
/*
ƒ createElementWithValidation(type, props, children)
type > name of element tag / components
props > means attributes, properties of that elements> can pass null => can contains another one child
children > content - can textContent, innerHTML(can contains another createElement()) -> content (single or multiple)
*/

let rh1 = React.createElement(
  "h1",
  {},
  React.createElement("span", null, "React DOM"),
);
// console.log("I'm", rh1);

// document.body.append(rh1);
// will throw [object Object] because of parsing issue

// console.log(ReactDOM);

// let realDOMElement = document.querySelector("#root");

// let rootofReact = ReactDOM.createRoot(realDOMElement);
// React does not immediately insert the element into the DOM.

// rootofReact.render(rh1);
/* does roughly:
     Create Fiber tree
     Compare Virtual DOM
     Schedule rendering work
     Commit changes to real DOM
The actual DOM insertion happens during React's Commit Phase.
*/

// short hand
// let rootofReact = ReactDOM.createRoot(realDOMElement).render(rh1);

//ES Module
// import { str } from "./main.js"
// import { sub } from "./main.js"

import { str, sub } from "./main.js";

// console.log(str);

// console.log(sub(10, 5));


let rtDiv = React.createElement("div", null,
    [React.createElement("div", {key:1, heading:"box"}, React.createElement("h1", {}, "I'm h1"))],
    [React.createElement("h2", {key:2}, React.createElement("span", {}, "I'm span under h2"))]
);


let rlDomDiv = document.querySelector("#root");

let rtDomDiv = ReactDOM.createRoot(rlDomDiv).render(rtDiv);
