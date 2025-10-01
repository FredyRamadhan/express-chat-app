const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

// Initialize Express app and create an HTTP server
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO and attach it to the HTTP server
const io = new Server(server);

// Define the port to run on
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Main Socket.IO logic
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('chat message', (msg) => {
    console.log('message from ' + socket.id + ': ' + msg);

    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
