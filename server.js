// server.js
const express = require('express');
const app = express();
const PORT = 3000;

process.env.PORT || PORT;

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.send(`${__dirname}/dist/`);
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 