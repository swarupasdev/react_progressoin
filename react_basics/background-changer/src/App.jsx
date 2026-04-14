import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [color,setColor]= useState("red")  //use array format always

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
          <div className="fixed flex flex-wrap justify-center bottom-80 insert-x-0 insert-y-0 px-55">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber "></div>
                <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-shadow-black shadow-amber-50"style={{backgroundColor:"red"}}>Red</button>
                <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full  text-shadow-black shadow-amber-50"style={{backgroundColor:"blue"}}>Blue</button>
                <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full  text-shadow-black shadow-amber-50"style={{backgroundColor:"green"}}>Green</button>
          </div>
      </div>
    </> //syntax  //function inside function on onClick
  )
}

export default App
