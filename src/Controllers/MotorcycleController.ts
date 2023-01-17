import { NextFunction, Request, Response } from 'express';
import Motorcycle from '../Domains/Motorcycle';
import IController from '../Interfaces/IController';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleControler {
  private _req: Request;
  private _res: Response;
  private _nextFunc: NextFunction;
  private motoService: MotorcycleService;

  constructor(controller: IController, motoService: MotorcycleService) {
    this._req = controller.req;
    this._res = controller.res;
    this._nextFunc = controller.next;
    this.motoService = motoService;
  }

  public async create() {
    try {
      const newMoto: Motorcycle | null = await this.motoService.save(this._req.body);
      return this._res.status(201).json(newMoto);
    } catch (error) {
      this._nextFunc(error);
    }
  }

  public async findById() {
    const { id } = this._req.params;
    try {
      const motoFound = await this.motoService.findById(id);
      return this._res.status(200).json(motoFound);
    } catch (error) {
      this._nextFunc(error);
    }
  }

  public async find() {
    try {
      const motoFound = await this.motoService.find();
      return this._res.status(200).json(motoFound);
    } catch (error) {
      this._nextFunc(error);
    }
  }

  public async update() {
    const { id } = this._req.params;
    try {
      await this.motoService.update(id, this._req.body);
      const motoFound = await this.motoService.findById(id);
      return this._res.status(200).json(motoFound);
    } catch (error) {
      this._nextFunc(error);
    }
  }
}