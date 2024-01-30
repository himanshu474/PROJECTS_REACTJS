"use strict";
import { useState } from "react"
import React from "react";

function App() {
  const [color, setColor] = useState("orange")

  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor: color}}
    >
    <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-3 ">
      <div className="flex flex-wrap shadow-xl bg-white px-3 py-2 rounded-3xl">
        <button
        onClick={()=>{setColor("blue")}}
        className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg"
        style={{backgroundColor:"blue"}}
        >Blue</button>
        <button 
         onClick={()=>{setColor("red")}}
        className="outline-none px-4 py-2 mx-2 
        rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}
        >Red</button>
        <button 
         onClick={()=>{setColor("black")}}
        className="outline-none px-4 py-2 mx-2
        rounded-full text-white shadow-lg"
        style={{backgroundColor:"black"}}
        >Black</button>
        <button 
         onClick={()=>{setColor("orange")}}
        className="outline-none px-4 py-2 mx-2 
        rounded-full text-white shadow-lg"
        style={{backgroundColor:"orange"}}
        >Orange</button>
        <button 
         onClick={()=>{setColor("green")}}
        className="outline-none px-4 py-2 mx-2
        rounded-full text-white shadow-lg"
        style={{backgroundColor:"green"}}
        >Green</button>
         <button 
         onClick={()=>{setColor("cyan")}}
        className="outline-none px-4 py-2 mx-2
        rounded-full text-white shadow-lg"
        style={{backgroundColor:"cyan"}}
        >Cyan</button>
        <button 
         onClick={()=>{setColor("pink")}}
        className="outline-none px-4 py-2 mx-2
        rounded-full text-white shadow-lg"
        style={{backgroundColor:"pink"}}
        >Pink</button>
        
      </div>
    </div>
    </div>
  )
}

export default App
