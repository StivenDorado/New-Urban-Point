import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'


// Routas de prueba 
import Footer from './components/general/footer/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <Footer></Footer>
    </>
  )
}

export default App
