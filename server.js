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


