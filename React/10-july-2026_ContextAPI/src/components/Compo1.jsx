import React from 'react'
import Compo2 from "./Compo2"


// React.createElement("Compo", Props, {Children})
// const Compo1 = ({data, children}) => {
const Compo1 = () => {
  return (
    <div>
        <h1>Compo1</h1>
        {/* {console.log("Compo1->",data)} */}
        {/* <Compo2 data={data}/> */}
        <Compo2/>
        {/* {children} */}
    </div>
  )
}

export default Compo1
