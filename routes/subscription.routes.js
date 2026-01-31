import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller";

const SubscriptionRouter = Router();

SubscriptionRouter.get('/',(req, res)=>res.send({ title: 'GET all Subscriptions '}));

SubscriptionRouter.get('/:id',(req, res)=>res.send({ title: 'GET Subscriptions Details'}));

SubscriptionRouter.post('/', authorize, createSubscription);

SubscriptionRouter.put('/:id',(req, res)=>res.send({ title: 'UPDATE Subscriptions '}));

SubscriptionRouter.delete('/:id',(req, res)=>res.send({ title: 'DELETE Subscriptions '}));

SubscriptionRouter.get('/user/:id',authorize, getUserSubscriptions);

SubscriptionRouter.put('/:id/cancel',(req, res)=>res.send({ title: 'CANCEL Subscriptions '}));

SubscriptionRouter.get('/upcoming-remewals',(req, res)=>res.send({ title: 'GET upcoming renewals '}));

export default SubscriptionRouter;