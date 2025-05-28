import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  return (
    <>
      <div>
       <CreateTodo></CreateTodo>
       <Todos todos = {[  
        {
          tittle: "Todo 1",
          description: "Description 1",
          completed: false
        },
        {
          tittle: "Todo 2",
          description: "Description 2",
          completed: true
        }
       ]}></Todos>
      </div>
     
    </>
  )
}

export default App
