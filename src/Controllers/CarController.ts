import { NextFunction, Request, Response } from 'express';
import IController from '../Interfaces/IController';
import CarService from '../Services/CarService';

export default class CarControler {
  private _req: Request;
  private _res: Response;
  private _nextFunc: NextFunction;
  private _carService: CarService;

  constructor(controller: IController, carService: CarService) {
    this._req = controller.req;
    this._res = controller.res;
    this._nextFunc = controller.next;
    this._carService = carService;
  }

  public async create() {
    const newCar = await this._carService.save(this._req.body);
    return this._res.status(201).json(newCar);
  }
}