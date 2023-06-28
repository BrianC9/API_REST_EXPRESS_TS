import { Response } from "express";

const handleHttpError = (res:Response, errorMsg:string, rawError?:unknown) =>{
    res.status(500);
    res.send({errorMsg,rawError})
}
export {handleHttpError}