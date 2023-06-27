import { Router } from "express";
import { readdirSync } from "fs";

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
        import(`./${filenameCleaned}`).then(moduleRouter => mainRouter.use(`/${filenameCleaned}`,moduleRouter.router))
        console.log(`Loading router ${cleanFileName(filename)}`);
    }
}
)

export default mainRouter
