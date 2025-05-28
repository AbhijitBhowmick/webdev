//Basic expreess boilerplate
const express = require('express');
const app = express();
const {createTodo , updateTodo } = require('./types.js');
const { todo } = require('./db.js');
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.post("/todo", async function(req, res) {
  try {
    console.log('Todo create post:', req.body);
    const payload = req.body;

    const parsedPayload = createTodo.safeParse(payload);
    if (!parsedPayload.success) {
      return res.status(400).json({ 
        message: 'Invalid payload',
      });
    }

    // Example: You might have some authorization logic here
    // For demonstration, let's say you check a condition and return 403
    // if (!req.user || !req.user.canCreateTodo) {
    //   return res.status(403).json({ message: 'Forbidden: You cannot create todos' });
    // }

    const createdTodo = await todo.create({
      tittle: payload.tittle,
      description: payload.description,
      completed: false
    });

    res.status(201).json({ message: 'Todo created', todo: createdTodo });

  } catch (error) {
    console.error('Error in POST /todo:', error);

    // If you want to specifically catch 403 errors thrown somewhere, you can check error type/message here
    // For now, respond with 500 Internal Server Error for unexpected errors
    res.status(500).json({ message: 'Internal Server Error' });
  }
});





 
app.get('/todos', async function(req, res) {   
     console.log('Todo find:', req.body);    
    const todos = await todo.find();
    if (!todos) {
        return res.status(404).json({ 
            message: 'No todos found',
        });
        return ;
    }
    res.status(200).json(todos);
});




app.put('/completed', async function(req, res) { 
  console.log('Inside todo completed:', req.body);
  const updateTodo = req.body;
  const parsedUpdateTodo = updateTodo.safeParse(updateTodo);
    if (!parsedUpdateTodo.success) {
        return res.status(411).json({ 
        message: 'You have invalid payload for update todo',
        });
        return ;
    }
    await todo.updateOne({
        _id: updateTodo.id
    }, {
        completed: true     
    })

  // Here you would typically save the completed todo to a database
  console.log('Completed todo received:', updateTodo);
  res.status(201).json({ message: 'Todo marked as completed', updateTodo });
});
app.listen(5002);
