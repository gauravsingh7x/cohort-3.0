import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { useState } from 'react';
import UserCard from './components/UserCard.jsx';

const App = () => {


  const [toggle, setToggle] = useState(false);
  const[users, setUsers] = useState([]);
    
  console.log(users);

  return (
        <div className="bg-gray-500 h-screen flex justify-center items-center">

        { toggle ? (
          users.map((elem, idx)=>{
            return  <UserCard user={elem} key={idx}/>
          })
          // <UserCard setUsers={setUsers}/> //1st way
          // <Login  setToggle={setToggle}/>
          ) : (
          <Register setUsers={setUsers} setToggle={setToggle} />
          )};
 



          {/* <Login />
          <Register /> */}
        </div>
  );
};

export default App