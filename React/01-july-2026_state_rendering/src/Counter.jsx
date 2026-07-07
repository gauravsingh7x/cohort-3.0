
import { useState } from "react";


let Counter = () => {


    console.log("Counter is Rendering....")

    let [count, setCount] = useState(0);
    // let count = 0;

    // console.log(count);

    return(

            <div>
                    <h1>Count is - {count}</h1>
                    <button
                    onClick={()=>{
                        // setCount(count+1);
                        // setCount(count+1);
                        // setCount(count+1);
// if same setFun, called multiple times inside a fun then there is term 'Batching' will be activated,
// and 'batching' wrap all calls and excute once 

//1st approcach is setCount(count+3)
//2nd approach to inremented by 3 with 
                        // setCount(count++);  //incremented but not excute
                        // setCount(count++);  // now inc 1 ++ = 2 but still 
                        // setCount(count++);  // now inc 2 ++ = 3 but still
                        // setCount(count++);   // 3 excuted then inc by 1

                        setCount((prev)=>{
                            return prev+1;   //fun always return, if no return then will retunr undefined by default
                        });
                        setCount((prev)=> ++prev );    //single expression can direct return
                        setCount((prev)=> ++prev );
                        // setCount((prev)=> prev+1 );
                    }
                }
                    >
                        Increment</button>
            </div>
    );
};

export default Counter