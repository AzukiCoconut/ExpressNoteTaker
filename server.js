const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

//GET Route for homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

//Get Route for Notes page
app.get('/notes', (res,req) => res.sendFile(path.join(__dirname, '/public/notes.html')));

//Get Route to direct users to the index page
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/pubic/index.html')));

app.listen(PORT, () => console.log('App listening'));
