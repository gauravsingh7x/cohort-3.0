
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import TestCompos from "./TestCompos.jsx";
import { ContextProvider } from "./context/MyContext.jsx";


createRoot(document.getElementById('root')).render(<App/>
//  <ContextProvider>
//     <TestCompos/>
//  </ContextProvider>
)
