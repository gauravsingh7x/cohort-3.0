import React, { useContext, useEffect } from 'react'
import { MyStore } from "../context/MyContext"

const About = () => {


    // let data = useContext(MyStore);
    // console.log("About Rendering..->", data)

    let interval = setInterval(()=>{
        console.log("I'm interval from About")
    },1000)

    useEffect(()=>{

      return ()=>{
        clearInterval(interval);
        console.log("I'm triggered coz About unmounted->")
      }
    }, [])

  return (
    <div>About</div>
  )
}

export default About