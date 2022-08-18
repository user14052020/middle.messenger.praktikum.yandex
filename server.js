// server.js
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/dist'));
app.get('/404', function(req, res){
  res.sendFile(__dirname + '/dist/');
}); 
app.get('/500', function(req, res){
  res.sendFile(__dirname + '/dist/');
}); 
app.get('/login', function(req, res){
  res.sendFile(__dirname + '/dist/');
}); 
app.get('/registration', function(req, res){
  res.sendFile(__dirname + '/dist/');
}); 
app.get('/chats', function(req, res){
  res.sendFile(__dirname + '/dist/');
}); 
app.get('/profile', function(req, res){
  res.sendFile(__dirname + '/dist/');
}); 
app.get('/profile-change-data', function(req, res){
  res.sendFile(__dirname + '/dist/');
}); 
app.get('/profile-change-pass', function(req, res){
  res.sendFile(__dirname + '/dist/');
}); 
app.get('/profile-new-ava-modal-choose-file', function(req, res){
  res.sendFile(__dirname + '/dist/');
}); 
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 