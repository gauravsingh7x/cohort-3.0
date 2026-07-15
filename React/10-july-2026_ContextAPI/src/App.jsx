
import React, { useState, useContext } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { Car } from "lucide-react";
import Cart from './components/Cart'
import { MyShop } from './context/MyWebContext';


const App =()=> {


  let {isCartOpen, products} = useContext(MyShop);

  // move to MyContext
  // let [isCartOpen, setIsCartOpen] = useState(true);
  // const [cartItems, setCartItems] =useState([]);
  // console.log(cartItems);


  return (

    <div className="h-screen p-4 flex flex-col gap-4 ">

    <Navbar 
    // setIsCartOpen={setIsCartOpen} 
    />

{
  // false 
  isCartOpen ? 
        (<div className="grid grid-cols-5 gap-4">
        {
          products.map((val, ) => {
           return <ProductCard 
          //  setCartItems={setCartItems}
           key={val.id}
           product={val} />;
          })
        }
      </div>
      ) : (
       <div>
        <Cart 
        // cartItems={cartItems}
        />
      </div>
      )
}


    </div>
  )
}

export default App
