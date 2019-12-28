// const express = require('express');
import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

const PORT = 3001;

const app = express();
const httpServer = http.createServer(app);
const io = socketIO(httpServer);

io.on('connection', () => {
  console.log('a user connected');
})

app.get('/', (req, res) => {
  res.send('Hello');
})

httpServer.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
