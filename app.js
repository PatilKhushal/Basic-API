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
connectMongoDB('mongodb://127.0.0.1:27017/tut12')
    .then((val) => console.log('Connected to mongodb://127.0.0.1:27017/tut12'))
    .catch((err) => console.log(err));


// Routes
app.use('/api', api);

// Listening
app.listen(port, () => 
{
    console.log("Listening on port 3000");
});