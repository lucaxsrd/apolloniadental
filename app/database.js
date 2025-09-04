require('dotenv').config();
const mongoose = require('mongoose');

let MONGODB_URI;
if (process.env.DB_CONNECTION === 'atlas') {
  MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@clustermini.8o9abxk.mongodb.net/test?retryWrites=true&w=majority&appName=Clustermini`;
} else {
  MONGODB_URI = 'mongodb://mongodb:27017/test';
}

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Conectado ao MongoDB.');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

module.exports = { connectDB };