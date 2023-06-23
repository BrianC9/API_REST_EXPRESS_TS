import mongoose from "mongoose";

export const dbConnect  = () => {
    const DB_URI = process.env.MONGO_URI as string
    
    mongoose.connect(DB_URI)
    .then(()=>{
        console.log("Connection with MongoDB OK")
    })
    .catch( err => console.log(err))
    
    mongoose.connection.on('error', err => {
        console.log("Error connecting to MongoDB")
    })
}