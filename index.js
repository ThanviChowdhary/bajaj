const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

app.use(bodyParser.json());

// Sample user data
const userData = {
  user_id: 'john_doe_17091999',
  email: 'john@xyz.com',
  roll_number: 'ABCD123',
};

// POST endpoint
app.post('/bfhl', (req, res) => {
  const requestBody = req.body;

  // Extract alphabets and find the highest alphabet
  const alphabets = requestBody.data.filter((item) => typeof item === 'string' && item.match(/[A-Za-z]/));
  const highestAlphabet = alphabets.length > 0 ? [alphabets.sort()[alphabets.length - 1]] : [];

  // Prepare the response
  const response = {
    is_success: true,
    user_id: userData.user_id,
    email: userData.email,
    roll_number: userData.roll_number,
    numbers: requestBody.data.filter((item) => typeof item === 'number'),
    alphabets: alphabets,
    highest_alphabet: highestAlphabet,
  };

  res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  // Respond with the operation_code
  res.status(200).json({ operation_code: 1 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
