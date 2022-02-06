const path = require('path');
const express = require('express');

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
const PORT = process.env.PORT || 3001

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});