import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { useState } from "react";


const App = () => {

  const [toggle, setToggle] = useState(true);

  const [users, setUsers] = useState(
      JSON.parse(localStorage.getItem("users")) || []
  );

  let deleteUser = (id)=>{
    let filterUser = users.filter((val, index)=>{
        return index !== id;
        // return index === id;
    });
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
    // console.log(filterUser);
    // console.log(id);
  }


  return (
    <div>
      <div>
        <Navbar setToggle={setToggle}/>
      </div>

{
  toggle? <div className="flex flex-wrap gap-5">
        {users.map((elem, idx)=>{
          return <UserCard id={idx} deleteUser={deleteUser} idx={idx} key={idx} user={elem} key={idx} setToggle={setToggle}/>
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