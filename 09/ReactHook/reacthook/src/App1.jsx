import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [render, setRender] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setRender(false)
    }
    , 10000);
  }
  , []);


  return (
    <>
      <div>
       {render ? <MyComponent /> : <div></div>}     
        
      </div>
      
    </>
  )
}

function MyComponent() {
  useEffect(() => {
    console.log('MyComponent mounted');
    return () => {
      console.log('MyComponent unmounted');
    }
  }, []);
return <div>
  <h1>Inside MyComponent</h1>
</div>
}

export default App
