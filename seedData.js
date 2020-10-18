const dotenv = require('dotenv');
const fs = require('fs');
const colors = require('colors');
const db = require('./config/db');


// Load ENV variables
dotenv.config({path: './config/config.env'});


// Load Model
const Product = require('./models/Product');

// Connect to Mongo Database
db().then();

// Read the JSON files
const products = JSON.parse( fs.readFileSync(`${__dirname}/_seedData/products.json`, 'utf-8'));

// Import simple data in DB
const importData = async () => {

    try {
        await Product.create(products);
        console.log('Data successfully imported'.green.inverse);
        process.exit();
    }catch (e) {
        console.log(e);
    }

};

// Delete data from DB
const deleteData = async () => {
  try {
      await Product.deleteMany();
      console.log('Data successfully deleted!!!'.red.inverse);
      process.exit();
  }  catch (e) {
      console.log(e);
  }
};

if (process.argv[2] === '-i'){
    importData().then();
}else if (process.argv[2] === '-d'){
    deleteData().then();
}
