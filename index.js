const express = require('express');
const app = express();

const PORT = 7777;
const HOST = 'localhost';

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});

app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});