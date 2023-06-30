import { Request, Response } from "express";

const authLogin = async (req:Request, res:Response) =>{
    const {body} = req
    res.send("Login user")
}

const authRegister =async (req:Request, res:Response) => {
    const {body} = req
    res.send("Register user")
}
export {authLogin, authRegister}