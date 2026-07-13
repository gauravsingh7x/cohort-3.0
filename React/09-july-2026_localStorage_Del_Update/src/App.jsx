import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { useState } from "react";


const App = () => {

  const [toggle, setToggle] = useState(false);

  const [users, setUsers] = useState(
    () => {
      return JSON.parse(localStorage.getItem("users"));
    }
  );


  return (
    <div>
      <div>
        <Navbar setToggle={setToggle}/>
      </div>

{
  toggle? <div className="flex gap-5">
        {users.map((elem, idx)=>{
          return <UserCard user={elem} key={idx} setToggle={setToggle}/>
        })}
      </div> :
        <div className="flex justify-center items-center h-[70%]:">
      <Form users={users} setUsers={setUsers} setToggle={setToggle}/>
    </div>
}
    
    </div>
  )
}

export default App;