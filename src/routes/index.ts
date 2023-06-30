import { Router } from "express";
import { readdirSync } from "fs";
import { logMiddleware } from "../middlewares/log.middleware";

const PATH_ROUTER = `${__dirname}`
const mainRouter = Router()
/**
 * 
 * @param filename
 * index.ts item.ts
 * @returns string index - item
 */
const cleanFileName = (filename: string): string => {
    const filenameCleaned = <string>filename.split('.').shift()
    return filenameCleaned
}
readdirSync(PATH_ROUTER).filter((filename) => {
    const filenameCleaned = cleanFileName(filename)
    if (filenameCleaned !== "index") {
        import(`./${filenameCleaned}.route`).then(moduleRouter => mainRouter.use(`/${filenameCleaned}`,logMiddleware,moduleRouter.router))
        console.log(`Loading router ${cleanFileName(filename)}`);
    }
}
)

export default mainRouter
