import { useState,useEffect} from 'react'

import './App.css'

//components
import { Navbar } from './components/navbar'
//route
import { AllRoutes } from './routes/routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <AllRoutes/>
    </>
  )
}

export default App
