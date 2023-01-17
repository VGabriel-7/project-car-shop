import { NextFunction, Request, Response } from 'express';
import IController from '../Interfaces/IController';
import IValidVehicle from '../Interfaces/IValidVehicle';

export default class ValidIdVehicle {
  private _req: Request;
  private _res: Response;
  private _nextFunc: NextFunction;
  private _vehicleService: IValidVehicle;

  constructor(controller: IController, carService: IValidVehicle) {
    this._req = controller.req;
    this._res = controller.res;
    this._nextFunc = controller.next;
    this._vehicleService = carService;
  }

  public async verifyId() {
    const { id } = this._req.params;
    const vehicle = await this._vehicleService.findById(id);
    if (vehicle === 'Invalid mongo id') {
      return this._res.status(422).json({ message: vehicle });
    } if (vehicle === 'Car not found' || vehicle === 'Motorcycle not found') {
      return this._res.status(404).json({ message: vehicle });
    }
    this._nextFunc();
  }
}