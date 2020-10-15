const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');




//Load to config.env file
dotenv.config({path: './config/config.env'});


//Connect to Database
db();





// Create express app
const app =express();

//middleware
app.use(express.json());

app.use(morgan('dev'));

app.use(cors());

//Set the static Folder Path
app.use(express.static(path.join(__dirname, 'public')));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on port : ${PORT}`);
});
