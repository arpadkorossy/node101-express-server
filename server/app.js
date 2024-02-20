// import files and packages up here
const express = require('express');
const path = require('path');
var morgan = require('morgan')
var data = require('./public/data.json');

// write your code here
const app = express();
const PORT = process.env.PORT || 3000;

const logger = (req, res, next) => {
    morgan(':method :url :status :response-time ms - :res[content-length]')
    console.log("Ran morgan logger")
    next();
};

// create your express server below
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(logger);

// add your routes and middleware below
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.status(200);
    console.log(req.path);
});

app.get('/data', (req, res) => {
    res.json(data);
    res.status(200);
    console.log(req.path);

    morgan(':method :url :status :response-time ms - :res[content-length]')
});


// finally export the express application
module.exports = app;
