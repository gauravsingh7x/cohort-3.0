import React, { createContext, useState } from 'react'

export const MyStore = createContext();


export const ContextProvider = ({children}) => {
        let [cartOpen, setCartOpen] = useState(false);

        const [cartItems, setCartItems] = useState([]);
        console.log(cartItems);

        let increaseQuantity = (id) =>{
                // console.log("Received ID:", id);
                //prev me pura array ek product ka
                setCartItems((prev) => {
                        // ab array par map, coz only transform(ek obj update) karke same return krna
                        return prev.map((val) => {
        //if aa rhi product.id with val.id matched then ? val me val.quantity ko +1 kar do : otherwise same val return              
                                return val.id === id ? {...val, quantity: val.quantity + 1 }  : val; 
                        });

                });
        };

        let decreaseQuantity = (id) =>{
                // console.log("Received ID:", id);
                //prev me pura array ek product ka
                setCartItems((prev) => {
                        // ab array par map, coz only transform(ek obj update) karke same return krna
                        return prev.map((val) => {
        //if aa rhi product.id with val.id matched then ? val me val.quantity ko -1 kar do : otherwise same val return              
                                return val.id === id ? {...val, quantity: val.quantity - 1 }  : val; 
                        });
                });
        };
        


return (<MyStore.Provider value={ {cartItems, setCartItems, cartOpen, setCartOpen, increaseQuantity, decreaseQuantity} }>
            {children}
        </MyStore.Provider>)
}