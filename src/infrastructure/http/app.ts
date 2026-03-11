import express from 'express'
import cors from 'cors'
import { publicRoute } from './routes/public.route.js';
import { privateRoute } from './routes/private.route.js';

const app=express();

app.use(express.json());

app.use(cors());

app.use(publicRoute);

app.use(privateRoute);

export {app}