const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('./helpers/uuid');
var noteData = require('./db/db.json');


const PORT = process.env.PORT || 3002;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
  console.log(noteData);
  res.json(noteData);

  console.info(`${req.method} request received to get notes`);
});


