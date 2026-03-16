import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Patron } from './components/Patron.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Patron></Patron>
    </div>
    </>
  )
}

export default App
