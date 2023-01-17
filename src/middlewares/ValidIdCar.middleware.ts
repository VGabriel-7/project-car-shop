import { NextFunction, Request, Response } from 'express';
import IController from '../Interfaces/IController';
import CarService from '../Services/CarService';

export default class ValidIdCar {
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

  public async verifyId() {
    const { id } = this._req.params;
    const carFound = await this._carService.findById(id);
    if (carFound === 'Invalid mongo id') {
      return this._res.status(422).json({ message: carFound });
    } if (carFound === 'Car not found') {
      return this._res.status(404).json({ message: carFound });
    }
    this._nextFunc();
  }
}