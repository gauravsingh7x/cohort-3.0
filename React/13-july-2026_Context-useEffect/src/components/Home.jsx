import React, { use, useContext } from 'react'
import { MyStore } from "../context/MyContext"

const Home = () => {

  // let {count, setCount} = useContext(MyStore);
  // let data = useContext(MyStore)
  // console.log("Home Rendering..->",data )
  console.log("Home Rendering.." )


  return (
    <div>
      {/* <h1>Home - {count}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }}>Increment</button> */}

    </div>
  )
}

export default Home