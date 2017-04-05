const express = require('express');
const SocketIo = require('socket.io');

const port = process.env.PORT || '3000';
const host = process.env.HOST || '0.0.0.0';
const app = express();

const server = app.listen(port, host, () => {
  console.log(`Server running ${host}:${port}`); // eslint-disable-line no-console
});

const io = new SocketIo(server);

io.on('connection', (socket) => {
  console.log('aweyis a connect'); // eslint-disable-line no-console
  socket.on('action', (action) => {
    switch (action.type) {
      case 'MESSAGE_SEND':
        io.emit('action', {
          type: 'MESSAGE_RECEIVE',
          payload: action.payload
        });
        console.log(action.payload); // eslint-disable-line no-console
        break;
      default:
        console.log(action); // eslint-disable-line no-console
    }
  });
});

module.exports = app;
