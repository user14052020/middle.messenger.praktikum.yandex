const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(__dirname + '/dist/'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 
