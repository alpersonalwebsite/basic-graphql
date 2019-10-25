const express = require('express');
const { port } = require('../constants').dev.http

const app = express();

app.use('/', express.static(__dirname + '/public'));

const listener = app.listen(process.env.PORT || port, () => {
  console.log('HTTP Server running at', listener.address().address + listener.address().port, 'in', process.env.NODE_ENV)
});