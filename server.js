'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

const sayHello = (req, res, next) => {
  res.json("HI ");
  next();
}
app.get('/', (req, res) => {
  res.send('Hello rapsanjani');
});
app.get('/api/', sayHello, (req, res) => {
  res.json("rofiqirapsanjani");
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);