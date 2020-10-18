const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');
const productRoute = require('./routes/product');



//Load to config.env file
dotenv.config({path: './config/config.env'});


//Connect to Database
db().then();



// Create express app
const app =express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(cors());

//Set the static Folder Path
app.use(express.static(path.join(__dirname, 'public')));

//Load routes
app.use('/api/v1/products', productRoute);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on port : ${PORT}`);
});
