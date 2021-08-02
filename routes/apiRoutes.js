const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
let noteData = require("../db/db.json");
const { stringify } = require("querystring");

//API GET REQUEST

//API POST REQUEST

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json(noteData));

  app.post("/api/notes", (req, res) => {
    req.body.id = uuidv4();
    noteData.push(req.body);
    fs.writeFile("./db/db.json", json.stringify(noteData));
    res.json(req.body);
  });

  app.delete("/api/notes/:id", (req, res) => {
    let deleteNote = req.params.id.toString();
    for (let i = 0; i < noteData.length; i++) {
        if (noteData[i].id = deleteNote) {
            res.send(noteData[i]);
            noteData.splice(i,1);
            break
        } 
    }
    fs.writeFile("./db/db.json", json.stringify(noteData));
  });

};
