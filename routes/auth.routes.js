import { Router } from "express";

import { signUp, signIn } from  "../controllers/auth.controllers.js";

const authRouter = Router();


// path: /api/v1/auth/sign-up (POST) BODY-> {name,email,password} -> create user and return token
authRouter.post('/sign-up', signUp);

// path: /api/v1/auth/sign-in (POST)
authRouter.post('/sign-in', signIn);


// authRouter.post('/sign-out', signOut);

export default authRouter;