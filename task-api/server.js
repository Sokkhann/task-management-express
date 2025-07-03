const app = require('./app');
const connectDB = require('./config/db')
const PORT = 4000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
