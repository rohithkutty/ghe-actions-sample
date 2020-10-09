const express = require('express');
const path = require('path');
const app = express();

const SERVER_PORT = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'build'))); // serving public folder contents
app.get('*', function (req, res, next) {
  res.sendFile(path.resolve('build/index.html'));
});

app.listen(SERVER_PORT, () => console.log(`App is running on PORT ${SERVER_PORT}`));
