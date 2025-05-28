import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
//useTodos is a custom hook that fetches data from an API and returns the todos
function useTodos() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTodos(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }
  , []);
  return todos;
}

  function App() {
   const todos = useTodos();
  return (
    <>
      {todos.map((todo) =>  <Track key={todo.id} todo={todo} />)}  
      
    </>
  )
  }

function Track({todo}) {
 
return <div>
  <h1>{todo.title}</h1>
  <p>Status: {todo.completed ? 'Completed' : 'Not completed'}</p>
</div>
}

export default App
