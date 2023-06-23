import express from "express";
import cors from "cors"

const PORT = 3000
const app = express()

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}` )
})