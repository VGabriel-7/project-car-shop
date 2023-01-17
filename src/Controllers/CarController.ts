import { NextFunction, Request, Response } from 'express';
import Car from '../Domains/Car';
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
    try {
      const newCar: Car | null = await this._carService.save(this._req.body);
      return this._res.status(201).json(newCar);
    } catch (error) {
      this._nextFunc(error);
    }
  }

  public async findById() {
    const { id } = this._req.params;
    try {
      const carFound = await this._carService.findById(id);
      return this._res.status(200).json(carFound);
    } catch (error) {
      this._nextFunc(error);
    }
  }

  public async find() {
    try {
      const carFound = await this._carService.find();
      return this._res.status(200).json(carFound);
    } catch (error) {
      this._nextFunc(error);
    }
  }

  public async update() {
    const { id } = this._req.params;
    try {
      await this._carService.update(id, this._req.body);
      const result = await this._carService.findById(id);
      return this._res.status(200).json(result);
    } catch (error) {
      this._nextFunc(error);
    }
  }
}