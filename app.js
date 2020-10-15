const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app =express();

//middleware
app.use(express.json());

app.use(morgan('dev'));

app.use(cors());

app.get('/', (req, res)=> {
   console.log('Get the request for the default route');
});

app.listen(8080, () =>{
    console.log('Server is running on port : 8080');
});
