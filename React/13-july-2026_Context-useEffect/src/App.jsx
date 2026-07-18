import React, { useContext, useEffect, useState } from 'react'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import { ContextProvider, MyStore } from "./context/MyContext"
import axios from "axios"

const App = () => {
  // console.log("App Rendering..")

  // data object{count, setCount}, value se aana chahiye par nhi aayega 
  // because App se hata kar Home ko wrap kiya hai ContextProvider se
  // let data = useContext(MyStore);
  // console.log("App->", data) //undefined coz data is just variable kuki usme App me kuc nhi a rha MyStore se

  // let {count, setCount} = useContext(MyStore);


  let [toggle,setToogle] = useState(true);

  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("App Rendering..")
  },[toggle]);


  const [apiData, setApiData]  = useState(null);
  //getting data through API (axios is third party to help API call)
  let getData = async () => {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setApiData(res.data); //to store data, but here infinite loop; create an state and storing the data
  }
  // getData(); //calling function to check over console coz clg in getData()

  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div>
      
      <h1>App - {count}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }}>Increment</button>
      <br/>
      <button onClick={()=>{
        setToogle((prev)=>!prev);
      }} >Change Toggle State</button>

      {
        toggle ? <Home/> : <About/>
      }



      {/* <ContextProvider>
        <Home/>
        
        <About/>
      </ContextProvider> */}

      {/* <Contact/> */}

    </div>

)
}

export default App
