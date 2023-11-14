const mongoose = require('mongoose');

function connectDB() {
  mongoose.connect('mongodb+srv://yash25465:root@cluster0.tcxwg9c.mongodb.net/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('Mongo DB connection success');
  });

  connection.on('error', (error) => {
    console.log('Mongo DB connection error:', error);
  });

  connection.on('disconnected', () => {
    console.log('Mongo DB connection disconnected. Reconnecting...');
    connectDB();
  });
}

connectDB();

module.exports = mongoose; // Exporting the mongoose object
