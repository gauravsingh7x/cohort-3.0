import React, { useContext } from 'react'
import { MyStore } from "../context/MyContext";

// const Compo4 = ({data}) => {
const Compo4 = () => {

  let data = useContext(MyStore); //to take data from context ek MyStore (should be exported) 
  console.log(data)

  return (
    <div>
        <h1>Compo4</h1>
        {/* {console.log("Compo4->", data)} */}
    </div>
  )
}

export default Compo4
