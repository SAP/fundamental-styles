const express = require('express');
const path = require('path');
const app = express();
const signale = require('signale');

app.set('port', 4000);

app.use(express.static(path.join(__dirname, '/static')));

app.get('*', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../playground') });
});

app.listen(4000);
signale.watch(`Listening at http://localhost:4000`);
module.exports = app;
