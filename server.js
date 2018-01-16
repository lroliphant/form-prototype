const express = require('express');
const app = express();
const path = require("path");
const port = 3000;
const DIST_DIR = path.join(__dirname, "dist")

app.use(express.static(DIST_DIR));


app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`)
});
