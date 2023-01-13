import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private _carODM: CarODM;

  constructor(carODM: CarODM) {
    this._carODM = carODM;
  }

  private createCarDoamin(car: ICar): ICar | null {
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

  public async save(car: ICar): Promise<ICar | null> {
    const newCar = await this._carODM.create(car);
    return this.createCarDoamin(newCar);
  }
}