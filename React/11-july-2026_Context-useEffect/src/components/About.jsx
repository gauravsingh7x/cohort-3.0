import React, { useContext } from 'react'
import { MyStore } from "../context/MyContext"

const About = () => {

    let data = useContext(MyStore);
    console.log("About Rendering..->", data)


  return (
    <div>About</div>
  )
}

export default About