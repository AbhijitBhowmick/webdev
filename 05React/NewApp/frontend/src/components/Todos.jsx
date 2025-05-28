import { CreateTodo } from "./CreateTodo";

export function Todos({todos}){
    return <div>{todos.map(function(todo){
            return <div>
                <h1>{todo._id}</h1>
                <h1>{todo.tittle}</h1>
                <p>{todo.description}</p>
                <button>{todo.completed === true ? "Completed": "Mark As completed"}</button>
            </div>
        })}
    </div>

}