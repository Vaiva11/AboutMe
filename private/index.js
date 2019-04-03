const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/email', (req, res) => {
  // your email code
  console.log(req.body);
  res.json({ message: 'success' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
