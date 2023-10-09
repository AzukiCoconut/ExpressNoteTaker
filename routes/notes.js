const note = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');

// GET route for retrieving all the notes
note.get("/", (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST route for a new note
note.post("/", (req, res) => {
    const { title, text } = req.body;

    if (title && text) {

        const newNote = {
            title, 
            text, 
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success', 
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});


// DELETE Route for a specific note
note.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            // Make an array of all the notes except the one with the ID provided in the url.
            const result = json.filter((note) => note.id !== noteId);

            // Save that array to the db file
            writeToFile('./db/db.json', result);

            // Respond to the Delete request
            res.json(`Note ${noteId} has been deleted`);
        });
} );

module.exports = note;