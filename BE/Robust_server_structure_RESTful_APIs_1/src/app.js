const express = require("express");
const app = express();

const notes = require("./data/notes-data");

app.use(express.json());

app.get("/notes/:noteId", (req, res) => {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if(foundNote) {
    res.json({ data: foundNote });
  } else {
    res.status(404).send(`Note id not found: ${noteId}`);
  }
});

app.get("/notes", (req, res) => {
  res.json({ data: notes });
});

// TODO: Add ability to create a new note
// Variable to hold the next ID
// Because some IDs may already be used, find the largest assigned ID
// If the note has a text property, add it to the notes array and send a 201 status code with the new note
// If the note does not have a text property, send a 400 status code
let lastNoteId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);
app.post("/notes", (req, res, next) => {
  const { data: { text } = {} } = req.body;
  if(text) {
    const newNote = {
      id: ++lastNoteId, // Increment last ID, then assign as the current ID
      text: text,
    };
    notes.push(newNote);
    res.status(201).json({ data: newNote });
  } else {
    res.status(400).send("A 'text' property is required.");
  }
});

// Not found handler
app.use((request, res, next) => {
  res.status(400).send(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, res, next) => {
  res.send(error);
});

module.exports = app;
