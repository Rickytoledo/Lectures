require('dotenv').config()
const express = require('express')

const chalk = require('chalk');
//import chalk from 'chalk'


const app = express();

app.use(express.static('public'));


//http://localhost:3000/
app.get('/', (req, res, next) => {
    //Go to a database
    res.send(`
        <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Cat</title>
            <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
            <h1>Cat</h1>
            <p>This is my second route</p>
            <img src="/images/cool-cat.jpg" />
        </body>
        </html>
    `);
})

app.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/cat-page.html'));


//http://localhost:3000/home
app.get('/home', (request, response, next) => {
    response.send('<h1>Welcome Ironhacker. :) 🤪</h1>');
});


app.listen(process.env.PORT, () => console.log(`My first app listening on port ${process.env.PORT} `));
