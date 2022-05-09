import mongoose from 'mongoose';

const connectDB = async() => { 
    mongoose.connect(process.env.MONGO_URI!).catch(error => console.log("Connection Error",error));
        
    const connection = mongoose.connection;
    if(connection.readyState>=1){
        console.log("Connected to database");
        return;
    }
    connection.on("Error",()=>console.log("Connection failed"));
};

export default connectDB;