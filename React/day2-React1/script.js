
import React  from "react";


// console.log(React);
// console.log("hey");


let root = document.querySelector("#root");

const h1 = React.createElement("h1", null, "I'm React");

ReactDOM.createRoot(root).render(h1);



