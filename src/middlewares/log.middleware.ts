import { NextFunction, Request, Response } from "express"
import { writeLogs } from "../utils/writeFile";

const logMiddleware = (req:Request, res:Response, next: NextFunction) =>{
    console.log(`MIDDLEWARE Request from: ${req.headers["user-agent"]}`);
    writeLogs(req.headers["user-agent"] as string)
    console.log(process.cwd());
    next()
}

export {logMiddleware}