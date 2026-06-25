
// import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
import {Om} from './App.jsx'


console.log("I'm main jsx")


// createRoot(document.getElementById('root')).render(<App />);
createRoot(document.getElementById('root')).render(Om());
