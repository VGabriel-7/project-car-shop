import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

type Category = 'Street' | 'Custom' | 'Trail';

export default class Motorcycle extends Vehicle {
  private category: Category;
  private engineCapacity: number;

  constructor(newMoto: IMotorcycle) {
    super(newMoto);
    this.category = newMoto.category;
    this.engineCapacity = newMoto.engineCapacity;
  }
}
