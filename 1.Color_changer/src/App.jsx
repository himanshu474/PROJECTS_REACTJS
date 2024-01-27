import { useState } from 'react'

function App() {
  const [color,setColor]=useState("cyan")
  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor:color}}
    >
      <div>
        
      </div>
    </div>
  )
}

export default App
