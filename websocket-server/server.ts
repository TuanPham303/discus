// const express = require('express');
import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

const PORT = 3001;

const app = express();
const httpServer = http.createServer(app);
const socket = socketIO(httpServer);

socket.on('connection', (connection) => {
  console.log('An user has connected');
  connection.on('disconnect', () => console.log('An user has disconnected'))
  connection.on('messageClientToServer', (message) => {
    socket.emit('messageServerToClient', message)
  })
})

app.get('/', (req, res) => {
  res.send('Hello');
})

httpServer.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
