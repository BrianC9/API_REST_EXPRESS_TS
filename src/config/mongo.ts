import mongoose from "mongoose";

export const dbConnect  = async () => {
    const DB_URI = <string>process.env.MONGO_URI 
    
    mongoose.connect(DB_URI)
    .then(()=>{
        console.log("Connection with MongoDB OK")
    })
    .catch( err => console.log(err))
    
    
}