const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const connectDB = async() =>{
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        if(connection){
            console.log("MongoDB connected successfully")
        }
    }catch(error){
        console.log("MongoDB Connection Error : ",error)
        process.exit(1);

    }
}

module.exports = connectDB;