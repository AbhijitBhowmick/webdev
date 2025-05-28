import React,{useState} from "react";
import "./App.css";

let counter = 0;

function App() {

  const [todos , setTodos] = useState([{
    id :counter++ ,
    tittle : "Gym",
    description : "GoToGym",
  },
  {
    id : counter++ ,
    tittle : "Eat",
    description : "Eat Food",
  },
  {
    id : counter++ ,
    tittle : "Sleep",
    description : "Go To Sleep",  
  }])


function addToDo() {
  setTodos([...todos,{//spread operator
    id :4 ,
    tittle : Math.random(),
    description : Math.random(),
  }])
}

  return <div>
    <button onClick={(addToDo)}> Add Todo</button>
    {todos.map((todo) => <ToDo key= {todo.id} tittle ={todo.tittle} description={todo.description} />)}
  </div>;
}

function ToDo({ tittle, description }) {
  console.log("Header function called");
  return (
    <div>
      <h1>{tittle}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
