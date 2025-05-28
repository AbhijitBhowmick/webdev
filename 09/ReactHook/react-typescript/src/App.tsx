import { useState } from 'react'
import './App.css'

interface TodoProps {
  title: string;
  description: string;
  completed: boolean;
}

function Todo(props: TodoProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

function App() {

  return (
    <>
      <div>
        <Todo title="Go To Gym" description="Gym" completed={true} />
      </div>
    </>
  );
}

export default App
