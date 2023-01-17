import mongoose from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private _motorcycleODM: MotorcycleODM;

  constructor(carODM: MotorcycleODM) {
    this._motorcycleODM = carODM;
  }

  private createCarDoamin(car: IMotorcycle): Motorcycle | null {
    if (car) {
      return new Motorcycle({
        id: car.id,
        model: car.model,
        year: car.year,
        color: car.color,
        status: car.status,
        buyValue: car.buyValue,
        category: car.category,
        engineCapacity: car.engineCapacity,
      });
    }

    return null;
  }

  public async save(car: IMotorcycle): Promise<Motorcycle | null> {
    const newCar = await this._motorcycleODM.create(car);

    return this.createCarDoamin(newCar);
  }

  public async findById(id: string): Promise<Motorcycle | null | string> {
    if (!id || !mongoose.isValidObjectId(id)) {
      return 'Invalid mongo id';
    }
    
    const carFound = await this._motorcycleODM.findById(id);
    
    if (!carFound) return 'Motorcycle not found';

    return this.createCarDoamin(carFound);
  }

  public async find(): Promise<Array<Motorcycle | null>> {
    const arrayCars = await this._motorcycleODM.find();
    if (arrayCars) {
      return arrayCars.map((car) => this.createCarDoamin(car));
    }
    return [];
  }

  public async update(id: string, updateCar: IMotorcycle): Promise<Motorcycle | null | string> {
    if (!id || !mongoose.isValidObjectId(id)) {
      return 'Invalid mongo id';
    }
    
    const carFound = await this._motorcycleODM.update(id, updateCar);
    
    if (!carFound) return 'Motorcycle not found';

    return this.createCarDoamin(carFound);
  }
}