const express = require('express');
require('dotenv').config()
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hostname = process.env.HOST_NAME;

app.use(cors());
app.use(express.static(path.join(__dirname, '../src/public')))


app.get('/', (req, res) => {
    res.send("index.html");
});

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});