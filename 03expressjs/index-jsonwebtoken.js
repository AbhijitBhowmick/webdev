const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3004;
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
const ALL_USERS = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
  { id: 3, username: 'user3', password: 'password3' },
  { id: 4, username: 'user4', password: 'password4' }
];

function userExists(username, password) {
  return ALL_USERS.some(user => user.username === username && user.password === password);
}

app.post('/login', function(req, res) {
  const { username, password } = req.body;
  if (!userExists(username, password)) {
    return res.status(403).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
  return res.json({ token });
}
);
