const express = require('express');
const app = express();
const port = 3000; // Choose the port you want to run your server on

// Define your GET endpoint
app.get('/endpoint', (req, res) => {
  // Extract query parameters slack_name and track
  const { slack_name, track } = req.query;

  // Check if both query parameters are provided
  if (!slack_name || !track) {
    return res.status(400).json({ error: 'Both slack_name and track query parameters are required.' });
  }

  // Get the current day and UTC time
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = new Date().toISOString();

  // Construct the JSON response with the specified format
  const jsonResponse = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: 'https://github.com/iamtomiee/repo/blob/main/file_name.ext',
    github_repo_url: 'https://github.com/iamtomiee/repo',
    status_code: 200,
  };

  // Send the JSON response
  res.json(jsonResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
