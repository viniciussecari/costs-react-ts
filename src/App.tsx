import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

export default function App() {
  const name = 'Vinícius'

  function sum (a: number, b: number){
    return a+b;
  }

  const url = "https://via.placeholder.com/150/5"

  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <h1>Olá, {name}</h1>
      <p>soma:  {sum(1,7)}</p>
      <h2>Alterando JSX</h2>
      <img src={url} alt="Minha imagem" />
    </div>
  )
}
