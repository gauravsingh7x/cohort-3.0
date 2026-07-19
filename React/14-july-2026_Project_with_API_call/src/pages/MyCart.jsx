import React, { useContext } from "react";
import CartCard from "./CartCard";
import { MyStore } from "../context/MyContext";

const MyCart = () => {

 const {cartItems} = useContext(MyStore);


  return (
    <div className="">
    {
        cartItems.map((elem)=>{
           return <CartCard product={elem} key={elem.id}/>
        })
    }        
    </div>
 
)
}

export default MyCart