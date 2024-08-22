import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Simple Counter</h1>
      <h2>{count}</h2>
      <section className="counter-controls">
        <button onClick={() => {setCount(count-1)}}>-</button>
        <button onClick={() => {setCount(count+1)}}>+</button>
        <button onClick={() => {setCount(0)}}>Reset</button>
      </section>
      
    </>
  )
}

export default App
