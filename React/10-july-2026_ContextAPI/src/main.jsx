
    import { createRoot } from 'react-dom/client'
    import App from './App.jsx'
    import './index.css';
    import TestCompos from "./TestCompos.jsx";
    import { MyStoreContextProvider } from "./context/MyContext.jsx";
    import { MyShopContextProvider } from "./context/MyWebContext.jsx";



    createRoot(document.getElementById('root')).render(
    <MyShopContextProvider>
        <App/>
    </MyShopContextProvider>

    //  <ContextProvider>
    //     <TestCompos/>
    //  </ContextProvider>
    )
