import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React  from 'react'
import './App.css'


function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
       <Count count={count}/>
       <Button count={count} setCount = {setCount}/>
    </div>

  )
}

function Count({count}) {
    {count}
  return <div>{count}</div>
}

function Button({count, setCount}) {
  return  <div> <button onClick={() => setCount(count + 1)}>Increment</button>
  <button onClick={() => setCount(count - 1)}>Decrement</button>
  <button onClick={() => setCount(0)}>Reset</button></div>
}

export default App
