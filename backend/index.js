const express = require('express');
import cors from "cors"
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
