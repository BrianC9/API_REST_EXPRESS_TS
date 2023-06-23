import express from "express";
import dotenv from "dotenv"


import cors from "cors"
dotenv.config()

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
export const startServer = async () =>{
    app.listen(PORT, () => {
    
        console.log(`Server listening on port ${PORT}` )
    })
}
