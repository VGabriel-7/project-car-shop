import { Router } from 'express';
import CarControler from '../Controllers/CarController';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';

const carODM = new CarODM();
const carService = new CarService(carODM);

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarControler({ req, res, next }, carService).create(),
);

export default routes;
