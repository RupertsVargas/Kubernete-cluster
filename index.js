var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "HOLA A TODOS SOY ROBERTO" }');
});

app.get('/roberto', function (req, res) {
    res.send('{ "response": "Hello ROBERTO Y" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " BUEN TRABAJO" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
