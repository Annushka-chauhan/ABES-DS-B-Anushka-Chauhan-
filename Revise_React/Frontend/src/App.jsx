import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardDesign from './Components/CardDesign'

function App() {
  return (
    <>
      <CardDesign  text= "Anushka" course="Btech Cse Ds A"/>
      <CardDesign text="Ridhima" course ="Btech it A"/>
    </>
  )
}

export default App
