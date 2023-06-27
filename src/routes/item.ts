import { Request, Response, Router } from "express";

const router = Router()

router.get("",(req:Request, res:Response)=>{
    res.send(`HELLO from ${req.url}`)
})
export { router}; 
