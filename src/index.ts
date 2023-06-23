import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import {dbConnect} from "../config/mongo"
dotenv.config()
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors);
app.listen(PORT, () => {
    
    console.log(`Server listening on port ${PORT}` )
})
dbConnect()