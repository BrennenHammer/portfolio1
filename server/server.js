const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const db = require('/db');
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes go here (if any)

// Handle other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
