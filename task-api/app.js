const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // parse JSON bodies
app.use('/api/tasks', taskRoutes); // all task-related routes

module.exports = app;
