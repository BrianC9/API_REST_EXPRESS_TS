import {dbConnect} from "./config/mongo"
import {startServer} from "./server/index"


startServer()

dbConnect()