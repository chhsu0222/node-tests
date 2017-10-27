const express = require('express');

var app = express();

app.get('/', (req, res) => {
  //res.status(200).send('Hello world!');
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

// GET /users (an array of object)
// Give users a name prop and age prop
app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'CH',
    age: 30
  }, {
    name: 'Garfield',
    age: 34
  }]);
});

app.listen(3000);

module.exports.app = app;
