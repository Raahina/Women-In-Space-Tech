const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

let data = [];

app.post('/classify', (req, res) => {
    const { imageUrl, classification } = req.body;
    data.push({ imageUrl, classification });
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    res.send('Data received');
});

app.get('/data', (req, res) => {
    res.sendFile(__dirname + '/data.json');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
