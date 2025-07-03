const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sokkhannpol02:vhQ1c9LzMzhiNssm@task-management.ju5x1by.mongodb.net/?retryWrites=true&w=majority&appName=task-management', {
      dbName: 'taskdb',
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
