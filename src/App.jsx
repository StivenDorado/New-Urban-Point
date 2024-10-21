import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentP from './components/Lessor/Characteristics-right/ComponentP'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <ComponentP/>
      </div>
    </>
  )
}

export default App
