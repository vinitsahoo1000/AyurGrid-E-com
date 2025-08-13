import { Router } from "express";
import { userRouter } from "./user.js";
import { adminRouter } from "./admin.js";


export const mainRouter = Router(); // main router 


mainRouter.use('/user',userRouter); //user router /user

mainRouter.use('/admin',adminRouter); //admin router /admin