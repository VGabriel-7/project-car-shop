import mongoose from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private _carODM: CarODM;

  constructor(carODM: CarODM) {
    this._carODM = carODM;
  }

  private createCarDoamin(car: ICar): Car | null {
    if (car) {
      return new Car({
        id: car.id,
        model: car.model,
        year: car.year,
        color: car.color,
        status: car.status,
        buyValue: car.buyValue,
        doorsQty: car.doorsQty,
        seatsQty: car.seatsQty,
      });
    }

    return null;
  }

  public async save(car: ICar): Promise<Car | null> {
    const newCar = await this._carODM.create(car);

    return this.createCarDoamin(newCar);
  }

  public async findById(id: string): Promise<Car | null | string> {
    if (!id || !mongoose.isValidObjectId(id)) {
      return 'Invalid mongo id';
    }
    
    const carFound = await this._carODM.findById(id);

    if (!carFound) return 'Car not found';

    return this.createCarDoamin(carFound);
  }

  public async find(): Promise<Array<Car | null>> {
    const arrayCars = await this._carODM.find();
    if (arrayCars) {
      return arrayCars.map((car) => this.createCarDoamin(car));
    }
    return [];
  }
}