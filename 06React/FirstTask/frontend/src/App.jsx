/**Use of useEffect Hook */

import React, { useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  useEffect(() => {
    console.log("useEffect called");
    const intervalId = setInterval(() => {
      console.log("Interval called" + intervalId)
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(async function(response){
        const json = await response.json();
        console.log(json);
        setTodos(json);
      });
    }, 10000);
    return () => clearInterval(intervalId);
  }, []); // Dependency array is empty, so it will run only once when the component mounts
    
  return <div>
    {todos.map((todo) => <ToDo
          key={todo.id}
          tittle={todo.title}
          description={todo.completed ? "Completed" : "Not completed"}
        />  )}
  </div>
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
