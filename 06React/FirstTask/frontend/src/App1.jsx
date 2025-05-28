import { useState , React, Fragment } from 'react'
import './App.css'

function App() {
  
    return (
    <>
      <div>
        <HeaderWithbutton/>
        <Fragment>
          <Header tittle = "Abhi2"></Header>
          <Header tittle = "Abhi3"></Header>
        </Fragment>
      </div>
      
    </>
  )
}
function HeaderWithbutton() {
  const [tittle, setTittle] = useState("My name is abhi1")

  function updaDateTittle() {
    setTittle("My name is " + Math.random());
    console.log("Tittle updated");
  }
  return <div>
           <button onClick={updaDateTittle}>Update the Tittle</button>
          <Header tittle = {tittle}></Header>
  </div>

}
function Header({tittle}) {
    console.log("Header function called");;
    return <div>
      {tittle}
      </div>
  }


export default App
