const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit_form', (req, res) => {
  const { nome, email, mensagem } = req.body;
  console.log('Form submission received:', { nome, email, mensagem });
  res.send('Form submitted successfully');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});