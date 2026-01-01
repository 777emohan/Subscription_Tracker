import { Router } from "express";

const SubscriptionRouter = Router();

SubscriptionRouter.get('/',(req, res)=>res.send({ title: 'GET all Subscriptions '}));

SubscriptionRouter.get('/:id',(req, res)=>res.send({ title: 'GET Subscriptions Details'}));

SubscriptionRouter.post('/',(req, res)=>res.send({ title: 'CREATE Subscriptions '}));

SubscriptionRouter.put('/:id',(req, res)=>res.send({ title: 'UPDATE Subscriptions '}));

SubscriptionRouter.delete('/:id',(req, res)=>res.send({ title: 'DELETE Subscriptions '}));

SubscriptionRouter.get('/user/:id',(req, res)=>res.send({ title: 'GET all user Subscriptions '}));

SubscriptionRouter.put('/:id/cancel',(req, res)=>res.send({ title: 'CANCEL Subscriptions '}));

SubscriptionRouter.get('/upcoming-remewals',(req, res)=>res.send({ title: 'GET upcoming renewals '}));

export default SubscriptionRouter;