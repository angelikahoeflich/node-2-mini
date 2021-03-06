const express = require('express');
const app = express();
const bc = require('./contollers/books_controller');

app.use(express.json());

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

const port = 3000;

app.listen(port, () => { 
  console.log(`server listening on port ${port}`)
})