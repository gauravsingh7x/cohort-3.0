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

  let [updateUser, setUpdateUser] = useState(null);
  // console.log("App ne hu", updateUser);



  return (
    <div>
      <div>
        <Navbar setToggle={setToggle}/>
      </div>

{
  toggle? <div className="flex flex-wrap gap-5">
        {users.map((elem)=>{
          return <UserCard 
          updateUser={updateUser} 
          setUpdateUser={setUpdateUser} 
          deleteUser={deleteUser} 
          key={elem.id} 
          user={elem} 
          setToggle={setToggle}/>
        })}
      </div> :
        <div className="flex justify-center items-center h-[70%]:">
      <Form updateUser={updateUser} users={users} setUsers={setUsers} setToggle={setToggle}/>
    </div>
}
    
    </div>
  )
}

export default App;