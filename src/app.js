import express from 'express';
import cors from 'cors';
import professionalRoutes from './routes/professional.js';
import clientRoutes from './routes/customer.js'; 


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(process.env.ROUTEPROF, professionalRoutes);
app.use(process.env.ROUTECLIENT, clientRoutes);

export default app;
