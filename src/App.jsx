import { useState } from 'react'
import Portfolio from './components/Portfolio'
import Passcards from './components/Passcards'
import Navbar from './components/Navbar'
// import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="pt-20">
      <Passcards/>
      </div>
      {/* <Portfolio/> */}
     
    </>
  )
}

export default App
