import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//chakra
import { ChakraProvider } from '@chakra-ui/react'

// react router dom
import { BrowserRouter } from 'react-router-dom'

//contexts
import { AuthContextProvider } from './authcontext/authcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <BrowserRouter>
      <AuthContextProvider>
      <ChakraProvider>
         <App />
       </ChakraProvider>
       </AuthContextProvider>
    </BrowserRouter>
     </React.StrictMode>,

)
