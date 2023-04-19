const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
require('dotenv').config({path: path.resolve(__dirname, './.env')});
require("./models/db");

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));


const routes = require('./routes/web');

app.use('/api/', routes);

app.listen (port, () => {
    console.log(`This server is running on ${port}`);
})

// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
//app.get('*', (req, res) => {
//    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//});
