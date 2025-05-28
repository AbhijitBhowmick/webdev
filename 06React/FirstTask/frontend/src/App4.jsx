import React from "react";
import "./App.css";

function App() {
  return <div>
    <CardWrapper innerComponent={<TestComponent1/>} />
    <CardWrapper innerComponent={<TestComponent2/>} />
  </div>
}

  

function CardWrapper({innerComponent}) {
  console.log("CardWrapper function called");
  return <div style ={{border: "1px solid black", padding: "10px", margin: "10px"}}>
    {innerComponent}
  </div>
  
}
function TestComponent1() {
  console.log("TestComponent1 function called");
  return <div>
    <h1>TestComponent1</h1>
  </div>
}
function TestComponent2() {
  console.log("TestComponent2 function called");
  return <div>
    <h1>TestComponent2</h1>
  </div>
}
export default App;
