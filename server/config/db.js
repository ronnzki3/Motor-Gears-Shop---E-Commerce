const mongoose = require('mongoose');

const connectDB = async() =>{
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);

    console.log(`Mongo database connected: ${conn.connection.host}`);
}


module.exports = connectDB;