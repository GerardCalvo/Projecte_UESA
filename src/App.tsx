import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Carrussel } from './components/Carrussel'
import { Noticies } from './components/Noticies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Carrussel/>
      <Noticies/>
      <Footer/>
    </>
  )
}

export default App
