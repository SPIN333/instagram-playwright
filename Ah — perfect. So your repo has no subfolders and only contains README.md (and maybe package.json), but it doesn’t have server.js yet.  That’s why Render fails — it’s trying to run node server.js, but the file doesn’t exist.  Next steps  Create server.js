// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { postToInstagram } = require('./postToInstagram'); // your Playwright code

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 10000;

app.post('/post', async (req, res) => {
  try {
    const { file, caption, date } = req.body;
    await postToInstagram({ file, caption, date });
    res.json({ status: 'success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Playwright server running on port ${PORT}`);
});
