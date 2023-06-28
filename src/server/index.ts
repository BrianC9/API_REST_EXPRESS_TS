import express from "express";
import cors from "cors";
import mainRouter from "../routes";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json())
app.use(mainRouter)
export const startServer = async () => {
    app.listen(PORT, () => {

        console.log(`Server listening on port ${PORT}`)
    })
}
