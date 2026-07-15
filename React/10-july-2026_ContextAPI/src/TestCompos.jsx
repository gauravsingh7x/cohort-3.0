import React, { Children, useState } from 'react'
import Compo1 from "./components/Compo1"
import NestedCompo from "./components/NestedCompo";

const TestCompos = () => {

  // const[data, setData] =  useState("I'm from Test Compos");
  // console.log(data);

  

  return (
    <div>
        {/* <Compo1 data={data}> */}
        <Compo1>
          {/* we will get using children in Compo1 React.createElement("Compo", Props, {Children}) */}
          <NestedCompo/>

        </Compo1>
        
    </div>

  )
}

export default TestCompos