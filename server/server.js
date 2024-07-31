const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize express
const app = express();

// Middleware
app.use(express.json());

// Serve static files from the 'client/build' directory
app.use(express.static(path.join(__dirname, '../client/build')));

// API Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Serve React app on all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// server.js (Update error handling)
app.get('/api/auth/profile', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  // Mock profile data
  res.json({ username: 'john_doe', avatar: '/path-to-avatar.jpg' });
});

