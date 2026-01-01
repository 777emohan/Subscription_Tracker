import { Router } from "express";

import authorize from "../middlewares/auth.middleware.js";

import { getUsers, getUser } from "../controllers/user.controller.js";

// import errorMiddleware from "../middlewares/error.middleware.js";

const userRouter = Router();

// GET /users -> get all users
// GET /users/:id -> get user by id // 123 4123 1234
userRouter.get('/',getUsers);

userRouter.get('/:id',authorize, getUser);

userRouter.post('/',(req, res)=> res.send({ title:'CREATE new User '}));

userRouter.put('/:id',(req, res)=> res.send({ title:'UPDATE User Details '}));

userRouter.delete('/:id',(req, res)=> res.send({ title:'DELETE ll User '}));

export default userRouter;