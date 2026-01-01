import { Router } from "express";

import { signUp, signIn } from  "../controllers/auth.controllers.js";

const authRouter = Router();


// path: /api/v1/auth/sign-up (POST) BODY-> {name,email,password} -> create user and return token
authRouter.post('/sign-up', signUp);

// path: /api/v1/auth/sign-in (POST)
authRouter.post('/sign-in', signIn);

// path: /api/v1/auth/sign-out (POST)
// authRouter.post('/sign-out', signOut); // Commented out as signOut is not implemented


export default authRouter;