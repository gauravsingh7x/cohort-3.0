import {React, useContext} from 'react'
import { MyStore } from "../context/MyContext";

const Navbar = () => {

  const {setCartOpen} = useContext(MyStore);

  return (
    <div className="p-4 bg-black h-10 text-white flex rounded items-center justify-between">
        <div>logo</div>
        <div className="flex gap-10 text-xl">
            <p
                onClick={() => {
                    setCartOpen(false);
                }}
            className="cursor-pointer">Home</p>
            <p
                onClick={() => {
                    setCartOpen(true);
                }}
            className="cursor-pointer">Cart</p>
        </div>
        <button>Login</button>
    </div>
  )
}

export default Navbar
