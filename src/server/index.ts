import express from "express";


import cors from "cors"

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
export const startServer = async () =>{
    app.listen(PORT, () => {
    
        console.log(`Server listening on port ${PORT}` )
    })
}
