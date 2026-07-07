import Card from "./components/Card";
import Contact from "./components/Contact";
import About from "./components/About";


const App = () => {


  let arr = [2, 4, 5, 6, 7, 8, 1, 0, 8, 4, 11, 3];

  return(
    <div className="" >

{
  arr.map((elem, index)=>{
    return <Card key={index}/>
  })
}

      {/* <About/>
      <Contact/> */}
    </div>
  );
}

export default App;