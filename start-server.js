const express = require('express');
const app = express();

const PORT = 7777;
const HOST = 'localhost';

// static path
app.use(express.static('static'))

// on url === "/" throw index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});

// on server start
app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});