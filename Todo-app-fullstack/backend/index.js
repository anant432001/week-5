const express = require('express');
const app = express();

app.use(express.json());

// Returns all the stored Todo's
app.get('/todos', function(){

})

// Saves a new Todo to the backend
app.post('/todo', function(){

})

// Updates a given Todo
app.put('/completed', function(){

})
