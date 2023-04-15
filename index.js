const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('we received a request.');

  const target = process.env.TARGET || 'Succesfully';
  res.send(`Request Processed ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('we are listening on port', port);
});
