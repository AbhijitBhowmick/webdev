import React,{ useState , Fragment } from 'react'
import './App.css'

function App() {
  const [tittle, setTittle] = useState("My name is abhi1")

  function updaDateTittle() {
    setTittle("My name is " + Math.random());
    console.log("Tittle updated");
  }
    return (
      <div>
        <Fragment>
          <button onClick={updaDateTittle}>Update the Tittle</button>
          <Header tittle = {tittle}></Header>
          <Header tittle = "Abhi2"></Header>
          <Header tittle = "Abhi3"></Header>
        </Fragment>
      </div>
      
  )
}
const Header = React.memo(function Header({tittle}) {
    console.log("Header function called");;
    return <div>
      {tittle}
      </div>
})


export default App
