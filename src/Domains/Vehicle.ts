import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(newMoto: IVehicle) {
    this.id = newMoto.id;
    this.model = newMoto.model;
    this.year = newMoto.year;
    this.color = newMoto.color;
    this.status = newMoto.status || false;
    this.buyValue = newMoto.buyValue;
  }
}
