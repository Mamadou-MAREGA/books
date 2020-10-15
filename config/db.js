const mongoose = require('mongoose');


const connectDatabase = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    console.log(`MongoDB connected successfully  on ${conn.connection.host}`);
};

module.exports = connectDatabase;
