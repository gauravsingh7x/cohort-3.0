import React, { useContext } from 'react'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import { ContextProvider, MyStore } from "./context/MyContext"

const App = () => {
  console.log("App Rendering..")

  //data object{count, setCount}, value se aana chahiye par nhi aayega 
  //because App se hata kar Home ko wrap kiya hai ContextProvider se
  let data = useContext(MyStore);
  console.log("App->", data) //undefined coz data is just variable kuki usme App me kuc nhi a rha MyStore se


  // let {count, setCount} = useContext(MyStore);

  return (
    <div>
      
      <h1>App</h1>


      <ContextProvider>
        <Home/>
        
        <About/>
      </ContextProvider>

      <Contact/>

    </div>

)
}

export default App
