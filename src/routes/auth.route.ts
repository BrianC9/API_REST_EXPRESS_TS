import { Request, Response, Router } from "express";
import { authLogin, authRegister } from "../controllers/auth.controller";

const router = Router()

router.post("/login",authLogin)
router.post("/register",authRegister)


export {router}