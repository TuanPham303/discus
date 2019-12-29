import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

const PORT = 3001;

const app = express();
const httpServer = http.createServer(app);
export const socket = socketIO(httpServer);

let userCount = 0;
const openCloseConnection = (connection) => {
  userCount += 1;
  socket.emit('userCount', userCount);

  connection.on('disconnect', () => {
    userCount -= 1;
    socket.emit('userCount', userCount)
  })
}

const broadcastMessage = (connection) => {
  connection.on('messageClientToServer', (message) => {
    socket.emit('messageServerToClient', message)
  })
}

const handleConnection = (connection) => {
  openCloseConnection(connection);
  broadcastMessage(connection);
}

socket.on('connect', handleConnection)

httpServer.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
