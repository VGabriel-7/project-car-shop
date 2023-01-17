import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import carRoutes from './Routes/CarRoutes';
import motoRoutes from './Routes/MotoRoutes';

const app = express();

app.use(express.json());

app.use(carRoutes);

app.use(motoRoutes);

app.use(ErrorHandler.handle);

export default app;
