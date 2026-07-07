import { useState } from "react";
const App = () => {
  console.log("Redering..");

  let [count, setCount] = useState(0);
  //  console.log(count);
  let handleCountBtn = () => {
    setCount(count + 1);
  };
  let [user, setUser] = useState({   //{} => ref(xyz) type hai jisme kabhi value nhi store hoti hai, reference rhta hai
    name: "Akshay",
  });
  //user having object refrence
  let handleNameBtn = () => {
    // user.name = "Gaurav";         //user changed but no update coz setFun ko call nhi hua hai, no rendering
    // setUser(user);             //setUser(user) => setFun me user ka same ref(xyz) gya so setFun no render due to same ref se same value
    setUser({ name: "Gaurav",
              //count ki value lexical scope se mil rhi hai THEN both state render together due to react batching(binding together) 
              kuchBHI: setCount(count+1)   
     });                          //now using this {} new ref and passing the new value inside, new ref to old ref, setFun value ko set karega or render
    // new ref => reference har bar alag hoga kuki object bhej rhe hain, har nya object banega so same value par new ref hai so render bhi har hoga
  };

  return (
    <div>
      <h1>Hello</h1>
  
      <p>Count is - {count}</p>
  
      <h1>User is - {user.name}{count}</h1>
  
      <button onClick={handleCountBtn}>Count</button>
  
      <button onClick={handleNameBtn}>Change Name</button>
    </div>
  );
}

export default App;
