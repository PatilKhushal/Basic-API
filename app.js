const express = require('express');
const logRequest = require('./middleware/log');
const connectMongoDB = require('./connection');
const api = require('./Routes/api')

const app = express();
const port = 3000;

// Middlewares
app.use(express.urlencoded({extended : false}));
app.use(logRequest('log.txt'));

// Connection to MongoDB
const dbURL = "mongodb://127.0.0.1:27017/Github";
connectMongoDB(dbURL)
    .then((val) => console.log(`Connected to ${dbURL}`))
    .catch((err) => console.log(err));


// Routes
app.use('/api', api);

// Listening
app.listen(port, () => 
{
    console.log("Listening on port 3000");
});