import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './card'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
        <h1 className='bg-blue-900 p-9 text-red-500 rounded-xl'>Tailwind Test</h1>
        <div className = "mt-10">
          <Card name="Swarup" message="Employer in Meta"/>
          <Card name="Dev" message="java Script"/>

        </div>
    </>
  )
}

export default App
