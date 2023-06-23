import dotenv from "dotenv"
import {dbConnect} from "../config/mongo"
import {startServer} from "../server/index"

dotenv.config()

startServer()

dbConnect()