export function CreateTodo(){
    return (
        <div>
            <input style={{
                padding: "10px",
                border: "1px solid black" }}
                type="text" placeholder="Tittle"></input><br/><br/>

            <input style = {{
                padding: "10px",
                border: "1px solid black"
            }}type="text" placeholder="Description"></input><br/><br/>
            
            <button>Add a Todo</button>
        </div>
    );
}