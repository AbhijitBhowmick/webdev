//Basic expreess boilerplate
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const {createTodo , updateTodo } = require('./types.js');

app.use(express.json());

app.post('/todo', function(req, res)  {
  const payload = req.body;
  const parsedPayload = createTodo.safeParse(payload);
  if (!parsedPayload.success) {
    return res.status(400).json({ 
      message: 'Invalid payload',
    });
    return ;
}
  console.log('Todo received:', todo);
  res.status(201).json({ message: 'Todo created', todo });
}
);




 
app.get('/todos', function(req, res) {       
    const params = req.params
    const parsedParams = createTodo.safeParse(params);
  // Here you would typically fetch todos from a database
  const todos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Node.js' },
  ];
  res.status(200).json(todos);
});




app.put('/completed', function(req, res) { 
  const updateTodo = req.body;
  const parsedUpdateTodo = updateTodo.safeParse(updateTodo);
    if (!parsedUpdateTodo.success) {
        return res.status(400).json({ 
        message: 'You have invalid payload for update todo',
        });
        return ;

  // Here you would typically save the completed todo to a database
  console.log('Completed todo received:', completedTodo);
  res.status(201).json({ message: 'Todo marked as completed', completedTodo });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
