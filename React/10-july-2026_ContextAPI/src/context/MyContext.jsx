import { createContext, useState } from "react";

//setup and black store----
export const MyStore = createContext();


// make a provider of our store who keeps/handles data and serves to the customers
export const ContextProvider = ({children}) => {

    const [contextData, setContextData] = useState("I'm from Context");

    const [cartItems, setCartItems] =useState([]);

                                    // pass in object in multiple data use case
    return <MyStore.Provider value={ {contextData, cartItems, setCartItems} }>
        {children}
    </MyStore.Provider>
}