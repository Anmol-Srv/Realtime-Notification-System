// const socketIo = require('socket.io');
// let io;

// const initSocket = (server) => {
//   io = socketIo(server, {
//     cors: {
//       origin: "*",
//       methods: ["GET", "POST"]
//     }
//   });

//   io.on('connection', (socket) => {
//     console.log('New client connected');

//     socket.on('disconnect', () => {
//       console.log('Client disconnected');
//     });

//     socket.on('error', (err) => {
//       console.error('Socket error:', err);
//     });

//     socket.on('connect_error', (err) => {
//       console.error('Connect error:', err);
//     });
//   });

//   return io;
// };

// const getSocket = () => {
//   if (!io) {
//     throw new Error("Socket.io not initialized");
//   }
//   return io;
// };

// module.exports = { initSocket, getSocket };

const socketIo = require('socket.io');

let io;

const initSocket = (server) => {
  io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  io.use((socket, next) => {
    const token = socket.handshake.query.token;
    if (!token) {
      return next(new Error('Authentication error'));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return next(new Error('Authentication error'));
      }
      socket.decoded = decoded;
      next();
    });
  });

  io.on('connection', (socket) => {
    console.log('New client connected:', socket.decoded.id);

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    socket.on('error', (err) => {
      console.error('Socket error:', err);
    });

    socket.on('connect_error', (err) => {
      console.error('Connect error:', err);
    });
  });

  return io;
};

const getSocket = () => {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }
  return io;
};

module.exports = { initSocket, getSocket };

