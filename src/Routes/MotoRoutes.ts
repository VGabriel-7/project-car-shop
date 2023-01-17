import { Router } from 'express';
import MotorcycleControler from '../Controllers/MotorcycleController';
import ValidIdCar from '../middlewares/ValidIdCar.middleware';
import MotorcycleODM from '../Models/MotorcycleODM';
import MotorcycleService from '../Services/MotorcycleService';

const motoODM = new MotorcycleODM();
const motoService = new MotorcycleService(motoODM);

const routes = Router();

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleControler({ req, res, next }, motoService).create(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleControler({ req, res, next }, motoService).find(),
);

routes.get(
  '/motorcycles/:id',
  (req, res, next) => new ValidIdCar({ req, res, next }, motoService).verifyId(),
  (req, res, next) => new MotorcycleControler({ req, res, next }, motoService).findById(),
);

routes.put(
  '/motorcycles/:id',
  (req, res, next) => new ValidIdCar({ req, res, next }, motoService).verifyId(),
  (req, res, next) => new MotorcycleControler({ req, res, next }, motoService).update(),
);

export default routes;
