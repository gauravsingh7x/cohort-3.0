
import axios from "axios"
import React, { useContext, useEffect, useState } from 'react'
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import MyCart from "./pages/MyCart";
import { MyStore } from "./context/MyContext";

const App = () => {

  let {cartOpen, cartItems} = useContext(MyStore);

  const [productData, setProductData] = useState([]);
  // console.log(productData);
  const apiProduct = async () => {
    try {
      let response = await axios.get('https://fakestoreapi.com/products');
      // console.log(response.data);
      setProductData(response.data);
    } catch (error) {
      console.log("API error ->", error); 
    }
  }
  useEffect(() => {
    apiProduct();
  },[])


  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      
      <Navbar/>
{
  cartOpen ? <div className="">
                <MyCart/>
              </div> 
              :
              <div className="grid grid-cols-4 gap-4">
              {
                    productData.map((elem) => {

                      //we're checking that is there items in cart ?
                      const isInCart = cartItems.find((val) => val.id === elem.id )
                      // console.log(isInCart);

                      return (
                      <ProductCard isInCart={isInCart} key={elem.id} product={elem}/>
                    )
                    })      
              }
              </div>
}

    </div>
  )
}

export default App