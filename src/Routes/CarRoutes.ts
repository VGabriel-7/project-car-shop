import { Router } from 'express';
import CarControler from '../Controllers/CarController';
import ValidIdCar from '../middlewares/ValidIdCar.middleware';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';

const carODM = new CarODM();
const carService = new CarService(carODM);

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarControler({ req, res, next }, carService).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarControler({ req, res, next }, carService).find(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new ValidIdCar({ req, res, next }, carService).verifyId(),
  (req, res, next) => new CarControler({ req, res, next }, carService).findById(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new ValidIdCar({ req, res, next }, carService).verifyId(),
  (req, res, next) => new CarControler({ req, res, next }, carService).update(),
);

export default routes;
