import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Simple Counter</h1>
      <h2>{count}</h2>
      <section className="counter-controls">
        <button className='material-symbols-outlined' onClick={() => {setCount(count-1)}}>remove</button>
        <button className='material-symbols-outlined' onClick={() => {setCount(count+1)}}>add</button>
        <button className='material-symbols-outlined' onClick={() => {setCount(0)}}>restart_alt</button>
      </section>
      
    </>
  )
}

export default App
