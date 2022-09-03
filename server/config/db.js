const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDb Connected`.blue.underline.bold);
}


module.exports = connectDB;